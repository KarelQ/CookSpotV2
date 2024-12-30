--DROP TABLE "rating";
--DROP TABLE "post_categories";
--DROP TABLE "bookmarks";
--DROP TABLE "users_details";
--DROP TABLE "categories";
--DROP TABLE "posts";
--DROP TABLE "users";
--DROP TABLE "roles";


CREATE TABLE "users" (
	"id_user" varchar(30) NOT NULL,
	"id_role" int NOT NULL DEFAULT 1,
	"email" varchar(100) NOT NULL,
	"password" varchar(100) NOT NULL,
	"username" varchar(50) NOT NULL,
	PRIMARY KEY("id_user")
);

CREATE TABLE "users_details" (
	"id_users_details" varchar(30) NOT NULL,
	"id_user" varchar(30) NOT NULL,
	"first_name" varchar(30),
	"last_name" varchar(50),
	"city" varchar(50),
	"street_name" varchar(50),
	"street_address" varchar(20),
	"postal_code" varchar(20),
	"state" varchar(50),
	"country" varchar(50),
	PRIMARY KEY("id_users_details")
);

CREATE TABLE "posts" (
	"id_post" varchar(30) NOT NULL,
	"id_user_owner" varchar(30) NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"ingredients" text NOT NULL,
	"recipe" text NOT NULL,
	"image" varchar(255) NOT NULL,
	"prep_time" varchar(10) NOT NULL,
	"difficulty" varchar(10) NOT NULL,
	"number_of_servings" int NOT NULL,
	"created_at" varchar(20) NOT NULL,
	"like" int NOT NULL DEFAULT 0,
	"dislike" int NOT NULL DEFAULT 0,

	PRIMARY KEY("id_post")
);

CREATE TABLE "rating" (
	"id_user" varchar(30) NOT NULL,
	"id_post" varchar(30) NOT NULL,
	"score" int NOT NULL CHECK(score BETWEEN -1 AND 1)
);

CREATE TABLE "bookmarks" (
	"id_user" varchar(30) NOT NULL,
	"id_post" varchar(30) NOT NULL
);

CREATE TABLE "categories" (
	"id_category" serial NOT NULL,
	"category_name" varchar(255),
	"category_desc" varchar(255),
	PRIMARY KEY("id_category")
);

CREATE TABLE "post_categories" (
	"id_post" varchar(30) NOT NULL,
	"id_category" int NOT NULL
);

CREATE TABLE "roles" (
	"id_role" int NOT NULL,
	"role_desc" varchar(20) NOT NULL,
	PRIMARY KEY("id_role")
);

CREATE TABLE logs (
    id_user VARCHAR(30),
    log_date DATE DEFAULT NULL
);


ALTER TABLE "users"
ADD FOREIGN KEY("id_role") REFERENCES "roles"("id_role")
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "bookmarks"
ADD FOREIGN KEY("id_user") REFERENCES "users"("id_user")
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "bookmarks"
ADD FOREIGN KEY("id_post") REFERENCES "posts"("id_post")
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "rating"
ADD FOREIGN KEY("id_user") REFERENCES "users"("id_user")
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "rating"
ADD FOREIGN KEY("id_post") REFERENCES "posts"("id_post")
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "post_categories"
ADD FOREIGN KEY("id_post") REFERENCES "posts"("id_post")
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "post_categories"
ADD FOREIGN KEY("id_category") REFERENCES "categories"("id_category")
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "posts"
ADD FOREIGN KEY("id_user_owner") REFERENCES "users"("id_user")
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE "users_details"
ADD FOREIGN KEY("id_user") REFERENCES "users"("id_user")
ON UPDATE CASCADE ON DELETE CASCADE;

CREATE OR REPLACE FUNCTION set_log_date()
RETURNS TRIGGER AS $$
BEGIN
    NEW.log_date := CURRENT_DATE;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER before_insert_logs
BEFORE INSERT ON logs
FOR EACH ROW
EXECUTE FUNCTION set_log_date();


CREATE VIEW user_logs AS
SELECT 
    logs.id_user,
    users.username,
	users.email,
    logs.log_date
FROM 
    logs
JOIN 
    users ON logs.id_user = users.id_user;


CREATE VIEW users_with_details AS
SELECT
    u.id_user,
    u.id_role,
    u.email,
    u.username,
    ud.id_users_details,
    ud.first_name,
    ud.last_name,
    ud.city,
    ud.street_name,
    ud.street_address,
    ud.postal_code,
    ud.state,
    ud.country
FROM
    users u
JOIN
    users_details ud ON u.id_user = ud.id_user;
