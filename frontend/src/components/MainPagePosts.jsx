import {useEffect, useState} from "react";
import {postList} from "../services/PostService.jsx";
import PostList from "../components/PostList";


const MainPagePosts = () => {
    const [posts, setPosts] = useState([]);

        useEffect(() => {
            postList().then((response) => {
                setPosts(response.data);
            }).catch((error) => {
                console.error(error);
            })
        }, []);

    return (
        <PostList posts={posts} />
    )
}

export default MainPagePosts;