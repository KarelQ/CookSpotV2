import {useEffect, useRef, useState} from "react";
import style from "/src/css/add-post.module.css";
import {category} from "../services/CategoryService.jsx";
import Loading from "./Loading.jsx";
import "/src/js/categories.js"
import {createPost} from "../services/PostService.jsx";
import {useNavigate} from "react-router-dom";
import {v4 as uuidv4} from "uuid";


const AddPost = ({ messages }) => {


    const [title, setTitle] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [numberOfServings, setNumberOfServings] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [recipe, setRecipe] = useState("");
    //const [image, setImageId] = useState("");

    const [allCategoryNames, setCategories] = useState([]);

    const navigate = useNavigate();


    const [like] = useState(0);
    const [dislike] = useState(0);

    const [imgFile, setImgFile] = useState(null);

    const getFileExtension = (filename) => {
        return filename.split('.').pop();
    };


    useEffect(() => {
        category()
            .then((response) => {
                console.log("API Response:", response);
                setCategories(response.data); // Ustawienie stanu z danymi
            })
            .catch((error) => {
                console.error("API Error:", error);
            });
    }, []); // Tylko raz po zamontowaniu komponentu


    const [idPost, setUniqueId] = useState("");
    useEffect(() => {
        const newId = uuidv4();
        setUniqueId(newId);
    }, []);


    // for dropdaw checkbox =========================
    const [categoryNames, setSelectedCategories] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleCheckboxChange = (e) => {
        const categoryId = parseInt(e.target.value, 10); // Parse the value as an integer
        setSelectedCategories((prevSelected) =>
            prevSelected.includes(categoryId)
                ? prevSelected.filter((id) => id !== categoryId) // Remove if already selected
                : [...prevSelected, categoryId] // Add if not selected
        );
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    //===============================================

    async function savePost(e) {
        e.preventDefault();

        const idUser = sessionStorage.getItem("sessionUserId");
        console.log("idUser", idUser);

        // private String idPost;
        // private String title;
        // private String description;
        // private String ingredients;
        // private String recipe;
        // private String image;
        // private String prepTime;
        // private String difficulty;
        // private Integer numberOfServings;
        // private String createdAt;
        // private Integer like;
        // private Integer dislike;
        // private String username;
        // private String idUser;
        // private Set<String> categoryNames;





        const formData = new FormData();
        formData.append("file", imgFile);

        const extension = getFileExtension(imgFile.name);
        let image;
        image = idPost + "." + extension;

        formData.append("newFileName", image);
        console.log(formData);




        try {
            const response = await fetch("http://localhost:8080/api/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("File uploaded successfully!");
            } else {
                alert("File upload failed.");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Error uploading file.");
        }


        const post = {
            idPost,
            title,
            difficulty,
            prepTime,
            numberOfServings,
            description,
            ingredients,
            recipe,
            image,
            categoryNames,
            like,
            dislike,
            idUser,
        }
        console.log(post);

        createPost(post).then((response) => {
            console.log(response.data);
            navigate(`/postpage/${post.idPost}`);

        });


    }

    if (!allCategoryNames[0] ) {
        return <Loading/>; // Show a loading state
    }

    return (
            <main>
                <div className={style.header}>
                    <div>
                        <h1 className={style["welcome-text"]}>Add Post

                        </h1>
                    </div>
                </div>
                <section className={style.section}>
                    {/*<form action="/addpost" method="POST" encType="multipart/form-data">*/}
                    <form>
                        <span className={style.messages}>
                            {messages &&
                                messages.map((message, index) => (
                                    <p key={index}>{message}</p>
                                ))}
                        </span>

                        <input
                            type="text"
                            className={style["input-text"]}
                            placeholder="Title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <div className={style.lists}>
                            <select
                                name="difficulty"
                                onChange={(e) => setDifficulty(e.target.value)}
                                value={difficulty}
                                className={style["input-text"]
                                }>
                                <option value="">Difficulty level</option>
                                <option value="easy">easy</option>
                                <option value="medium">medium</option>
                                <option value="hard">hard</option>
                            </select>

                            <select name="prep_time"
                                    className={style["input-text"]}
                                    onChange={(e) => setPrepTime(e.target.value)}
                                    value={prepTime}
                            >
                                <option value="">Preparation time</option>
                                <option value="5min">5 minutes</option>
                                <option value="10min">10 minutes</option>
                                <option value="15min">15 minutes</option>
                                <option value="20min">20 minutes</option>
                                <option value="30min">30 minutes</option>
                                <option value="45min">45 minutes</option>
                                <option value="1h">1 hour</option>
                                <option value="1,5h">1 hour 30 minutes</option>
                                <option value="2h">2 hours</option>
                                <option value="2,5h">2 hours 30 minutes</option>
                                <option value="3h">3 hours</option>
                                <option value="<3h">more than 3 hours</option>
                            </select>

                            <select
                                name="number_of_servings"
                                className={style["input-text"]}
                                onChange={(e) => setNumberOfServings(e.target.value)}
                                value={numberOfServings}
                            >
                                <option value="">Number of servings</option>
                                {[...Array(20)].map((_, index) => (
                                    <option key={index} value={index + 1}>
                                        For {index + 1}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={style["dropdown"]} ref={dropdownRef}>
                            <button className={style["email"]} type="button" onClick={toggleDropdown}>
                                Select Categories ({allCategoryNames.length})
                            </button>
                            {isDropdownOpen && (
                                <div className={style["checkbox-dropdown"]}>
                                    {allCategoryNames.map((category) => (
                                        <label key={category.id} className="dropdown-item">
                                            <input
                                                type="checkbox"
                                                value={category.id}
                                                checked={categoryNames.includes(category.id)}
                                                onChange={handleCheckboxChange}
                                            />
                                            {category.categoryName}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>


                        <textarea
                            name="description"
                            rows="5"
                            placeholder="Description"
                            className={style["input-text"]}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <textarea
                            name="ingredients"
                            rows="10"
                            placeholder="Ingredients"
                            className={style["input-text"]}
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                        ></textarea>
                        <textarea
                            name="recipe"
                            rows="10"
                            placeholder="Recipe"
                            className={style["input-text"]}
                            value={recipe}
                            onChange={(e) => setRecipe(e.target.value)}
                        ></textarea>
                        <input
                            type="file"
                            name="image"
                            className={style["input-text"]}
                            onChange={(e) => setImgFile(e.target.files[0])}
                            //onChange={() => setImage("test")}
                        />
                        <button onClick={savePost} className={style["input-text"]}>
                            Submit
                        </button>
                    </form>
                </section>
            </main>
    );
};

export default AddPost;
