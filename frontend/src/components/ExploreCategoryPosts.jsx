import {useEffect, useState} from "react";
import {postList, postListByCategoryId} from "../services/PostService.jsx";
import PostList from "../components/PostList";
import {useParams} from "react-router-dom";


const ExploreCategory = () => {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();

        useEffect(() => {
            postListByCategoryId(id).then((response) => {
                setPosts(response.data);
            }).catch((error) => {
                console.error(error);
            })
        }, []);

    return (
        <PostList posts={posts} />
    )
}

export default ExploreCategory;