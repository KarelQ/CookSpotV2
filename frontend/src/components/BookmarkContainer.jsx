import React, { useState } from "react";
import style from "/src/css/post-detales.module.css";

const BookmarkContainer = ({ postId, initialBookmarked }) => {
    const [bookmarked, setBookmarked] = useState(initialBookmarked);

    const handleBookmarkClick = () => {
        fetch(`/bookmarkpost/${postId}`)
            .then(() => {
                setBookmarked((prev) => !prev);
            })
            .catch((error) => {
                console.error("Error updating bookmark:", error);
            });
    };

    return (
        <div className={style["bookmark-container"]}>
            <div className="bookmark-text">
        <span
            id="bookmark-text"
            className={bookmarked ? style.pressed : ""}
        >
          {bookmarked ? "Bookmarked" : "Bookmark"}
        </span>
            </div>

            <div className="bookmark">
                <i
                    className={`bookmark material-symbols-outlined hover ${
                        bookmarked ? style.pressed : ""
                    }`}
                    id="bookmark"
                    onClick={handleBookmarkClick}
                >
                    bookmark
                </i>
            </div>
        </div>
    );
};

export default BookmarkContainer;
