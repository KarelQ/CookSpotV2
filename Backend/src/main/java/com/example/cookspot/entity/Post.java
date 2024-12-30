package com.example.cookspot.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity

@Table(name = "posts")
public class Post {
    @Id
    @Column(name = "id_post", nullable = false, length = 30)
    private String idPost;

    @Column(name = "id_user_owner", nullable = false)
    private String idUserOwner;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false, length = Integer.MAX_VALUE)
    private String description;

    @Column(name = "ingredients", nullable = false, length = Integer.MAX_VALUE)
    private String ingredients;

    @Column(name = "recipe", nullable = false, length = Integer.MAX_VALUE)
    private String recipe;

    @Column(name = "image", nullable = false)
    private String image;

    @Column(name = "prep_time", nullable = false, length = 10)
    private String prepTime;

    @Column(name = "difficulty", nullable = false, length = 10)
    private String difficulty;

    @Column(name = "number_of_servings", nullable = false)
    private Integer numberOfServings;

    @Column(name = "created_at", nullable = false, length = 20)
    private String createdAt;

    @ColumnDefault("0")
    @Column(name = "like", nullable = false)
    private Integer like;

    @ColumnDefault("0")
    @Column(name = "dislike", nullable = false)
    private Integer dislike;

    public String getIdPost() {
        return idPost;
    }

    public String getIdUserOwner() {
        return idUserOwner;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getIngredients() {
        return ingredients;
    }

    public String getRecipe() {
        return recipe;
    }

    public String getImage() {
        return image;
    }

    public String getPrepTime() {
        return prepTime;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public Integer getNumberOfServings() {
        return numberOfServings;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public Integer getLike() {
        return like;
    }

    public Integer getDislike() {
        return dislike;
    }
}