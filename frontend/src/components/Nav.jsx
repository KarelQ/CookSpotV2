import React, { useEffect, useState } from "react";
import "/src/css/style.css";
import "/src/css/nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const [isNavVisible, setNavVisible] = useState(true); // State to control nav visibility

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem("sessionUserId");
        console.log(isLoggedIn);

        if (isLoggedIn === null) {
            navigate("/"); // Redirect if session is missing
        }
    }, [navigate]);

    // Function to toggle navigation visibility
    const toggleNav = () => {
        setNavVisible((prevVisible) => !prevVisible);
    };

    return (
        <>
            <nav style={{ display: isNavVisible ? "block" : "none" }}>
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
                    <li className="end">
                        <a href="/logout" className="button">Logout</a>
                    </li>
                </ul>
            </nav>
            {/*<main className={isNavVisible ? "" : "mainToggle"}>*/}
            {/*    /!* Content goes here *!/*/}
            {/*</main>*/}
            <button id="toggleNavButton" onClick={toggleNav}>
                MENU
            </button>
        </>
    );
};

export default Nav;
