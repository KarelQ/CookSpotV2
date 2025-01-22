import {useEffect, useState} from "react";
import PostDetails from "./PostDetails.jsx";
import {useParams} from "react-router-dom";
import {postDetailsById} from "../services/PostService.jsx";
import Error from "./Error.jsx";




const PostPage = () => {
    const { id } = useParams();

        const [post, setPost] = useState([]);
        const [error, setError] = useState(null);


    useEffect(() => {
            if (id) {
                console.log("id", id);
                postDetailsById(id)
                    .then((response) => {
                        setPost(response.data);
                    })
                    .catch((error) => {
                        console.error(error);
                        setError("Failed to fetch post.");
                    });
            }
        }, [id]);

        if (error) {
            return (<Error error={error} />);
        }
    const rate = 1;
    const book = true;
    const category = ["Italian", "FastFood", "Dinner"];
    const isAdmin = true;

    return (
        <PostDetails post={post} rate={rate} book={book} category={category} isAdmin={isAdmin}/>
    )




        // const [posts] = useState([
        //     {
        //         idPost: "1",
        //         userOwner: "JohnDoe",
        //         title: "Delicious Pizza",
        //         description: "A classic pizza recipe with a crispy crust and fresh toppings.",
        //         ingredients: "Flour, Water, Yeast, Tomato Sauce, Cheese, Pepperoni",
        //         recipe: "1. Prepare dough. 2. Add toppings. 3. Bake in oven at 220°C for 15 minutes.",
        //         image: "pizza.jpg",
        //         prepTime: "30 mins",
        //         difficulty: "Easy",
        //         numberOfServings: 4,
        //         createdAt: "2025-01-16",
        //     }
        //     ]);
        //


}
export default PostPage;