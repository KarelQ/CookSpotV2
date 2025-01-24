import {useEffect, useRef, useState} from "react";
import style from "/src/css/add-post.module.css";
import {categoryList} from "../services/CategoryService.jsx";
import Loading from "./Loading.jsx";
import "/src/js/categories.js"


const AddPost = ({ messages }) => {

    const [title, setTitle] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [numberOfServings, setNumberOfServings] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [recipe, setRecipe] = useState("");
    const [image, setImage] = useState(null);

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        categoryList()
            .then((response) => {
                console.log("API Response:", response);
                setCategories(response.data); // Ustawienie stanu z danymi
            })
            .catch((error) => {
                console.error("API Error:", error);
            });
    }, []); // Tylko raz po zamontowaniu komponentu





    // for dropdaw checkbox =========================


        //const categories = ["Technology", "Health", "Finance", "Education", "Travel"]; // Categories array
        const [selectedCategories, setSelectedCategories] = useState([]);
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const dropdownRef = useRef(null);

        const handleCheckboxChange = (e) => {
            const category = e.target.value;
            setSelectedCategories((prevSelected) =>
                prevSelected.includes(category)
                    ? prevSelected.filter((item) => item !== category) // Remove if already selected
                    : [...prevSelected, category] // Add if not selected
            );
        };

        const toggleDropdown = () => {
            setIsDropdownOpen((prevState) => !prevState);
        };

        // Close dropdown when clicking outside
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

    function savePost (e){
        e.preventDefault();

        const post = {
            title,
            difficulty,
            prepTime,
            numberOfServings,
            description,
            ingredients,
            recipe,
            image,
            selectedCategories,
        }
        console.log(post);
    }

    if (!categories[0] ) {
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
                            <button className={style["email"]}  type="button" onClick={toggleDropdown}>
                                Select Categories ({selectedCategories.length})
                            </button>
                            {isDropdownOpen && (
                                <div className={style["checkbox-dropdown"]}>{
                                    categories.map((category, index) => (
                                        <label key={index} className="dropdown-item">
                                            <input
                                                type="checkbox"
                                                value={category}
                                                className={style[""]}
                                                checked={selectedCategories.includes(category)}
                                                onChange={handleCheckboxChange}
                                            />
                                            {category}
                                        </label>
                                    ))
                                    }</div>
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
                            onChange={(e) => setImage(e.target.files[0])}
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
