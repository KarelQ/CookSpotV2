import {useEffect, useState} from "react";
import PostDetails from "./PostDetails.jsx";
import {useParams} from "react-router-dom";
import {postDetailsById} from "../services/PostService.jsx";
import Error from "./Error.jsx";


const PostPage = () => {
    const { id } = useParams();

    const [post, setPost] = useState([]);
    const [error, setError] = useState(null);

// useEffect(() => {
//     if (id) {
//         console.log("id", id);
//
//         // Define multiple API calls
//         const fetchPostDetails = postDetailsById(id);
//
//         Promise.all([fetchPostDetails])
//             .then(([postResponse]) => {
//                 // Process both responses
//                 setPost({
//                     ...postResponse.data,
//                 });
//             })
//             .catch((error) => {
//                 console.error(error);
//                 setError("Failed to fetch post or related data.");
//             });
//     }
// }, [id]);




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
    const isAdmin = true;

    return (
        <PostDetails post={post} rate={rate} book={book} isAdmin={isAdmin}/>
    )



}
export default PostPage;