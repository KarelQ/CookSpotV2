//import React from "react";
import "/src/css/style.css";
import "/src/css/nav.css";
//import "src/js/nav.js";

const isAdmin = () => {
    // Replace this with the actual logic for checking if the user is an admin
    return true; // Example: always returns true for demonstration purposes
};

const Nav = () => {
    return (
        <>
            <nav>
                <img src="/src/assets/logo_with_name.png" alt="LOGO ALT" />
                <ul>
                    <li>
                        <a href="/mainpage" className="button">Home</a>
                    </li>
                    <li>
                        <a href="/explore" className="button">Explore</a>
                    </li>
                    <li>
                        <a href="/bookmarks" className="button">Bookmarks</a>
                    </li>
                    <li>
                        <a href="/myprofile" className="button">My Profile</a>
                    </li>
                    <li>
                        <a href="/addpost" className="button">Add Post</a>
                    </li>
                    {isAdmin() && (
                        <li>
                            <a href="/dislikedposts" className="button">Disliked Posts</a>
                        </li>
                    )}
                    <li className="end">
                        <a href="/logout" className="button">Logout</a>
                    </li>
                </ul>
            </nav>
            <button id="toggleNavButton">MENU</button>
        </>
    );
};

export default Nav;
