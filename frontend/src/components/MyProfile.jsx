import {useEffect, useState} from "react";
import {postListByUserId} from "../services/PostService.jsx";
import PostList from "../components/PostList";
import Profile from "./UserDetails.jsx";


const MyProfile = () => {
    const [posts, setPosts] = useState([]);
    //const [id] = useState("666b8d092770c2.98573332");
    const id = sessionStorage.getItem("sessionUserId");

    useEffect(() => {
        postListByUserId(id).then((response) => {
            setPosts(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }, []);

    return (
        <>
            <Profile/>
            <PostList posts={posts} />
        </>
    )
}

export default MyProfile;