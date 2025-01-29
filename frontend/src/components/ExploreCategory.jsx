import React, { useEffect, useState } from "react";
import {category} from "../services/CategoryService.jsx";



const ExploreCategory = () => {
    const [categories, setCategories] = useState([]);

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


    return (
        <main>
            <section className={"posts" + " " + "categories"}>
                {categories.map((category) => (
                    <div key={category.id} id={category.id}>
                        <img
                            src={`/public/category/${category.id}.jpg`}
                            alt="category image"
                        />
                        <div className={"category-desc"}>
                            <h1>
                                <a href={`category/${category.id}`}>
                                    {category.categoryName}
                                </a>
                            </h1>
                            <p className={"category"}>{category.categoryDesc}</p>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default ExploreCategory;
