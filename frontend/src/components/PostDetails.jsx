import "../css/style.css"; // Import pliku globalnego
import style from '/src/css/post-detales.module.css'


import Loading from './Loading';
import BookmarkContainer from "./BookmarkContainer.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {deletePostById} from "../services/PostService.jsx";


const PostDetails = ({ post, rate, book }) => {
    const navigate = useNavigate();
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        if (post.idUser === sessionStorage.getItem("sessionUserId")) {
            setIsOwner(true);
        }
    }, [post.idUser]);


    const deleteThatPost = () => {
        deletePostById(post.idPost).then((response) => {
            console.log(response);
            navigate("/myprofile"); // Przekierowanie do profilu po usunięciu posta
        }).catch((error) => {
            console.error("Error deleting post:", error);
        });
    };
    if (!post || !post.categoryNames) {
        return <Loading/>; // Show a loading state
    }

    console.log(isOwner);
    const handleError = (e) => {
        e.target.src = 'http://localhost:8080/api/img/default.png'; // Ścieżka do domyślnego obrazu
    };




    return (
        <main>
        <section className={`${style.posts} rate book category`}>
            <div id={post.idPost}>
                <div className={style["post-content"]}>
                    {/*<img src={`http://localhost:8080/api/img/${post.image}`} alt="post image" className={style["post-image"]}/>*/}
                    <img

                        src={`http://localhost:8080/api/img/${post.image}`}
                        alt="post image"
                        className={style['post-image']}
                        onError={handleError}
                    />

                    <div className={style["post-icons"]}>
                        <div>
                            <i className="material-symbols-outlined">account_circle</i>
                        </div>
                        <span>{post.username}</span>
                        <div className={style["place-holder"]}>xxx</div>
                        <div>
                            <i className="material-symbols-outlined">signal_cellular_alt</i>
                            <span>{post.difficulty}</span>
                        </div>
                        <div>
                            <i className="material-symbols-outlined">timer</i>
                            <span>{post.prepTime}</span>
                        </div>
                        <div>
                            <i className="material-symbols-outlined">Restaurant</i>
                            <span>for {post.numberOfServings}</span>
                        </div>
                    </div>
                </div>

                <div className={style["post-icons-interactive"]}>
                    <div className={style["likes-dislikes"]}>
                        <div className="like">
                            <i
                                id="thumblike"
                                className={`material-symbols-outlined hover ${rate === 1 ? style.pressed : ''}`}
                            >thumb_up</i>
                        </div>

                        <div className="dislike">
                            <i
                                id="thumbdislike"
                                className={`material-symbols-outlined thumb hover ${rate === -1 ? style.pressed : ''}`}
                            >thumb_down</i>
                        </div>
                    </div>

                <BookmarkContainer postId={post.idPost}  initialBookmarked={book}/>




                </div>



                <div className={style["post-desc"]}>
                    <p className="date">Posted on: {post.createdAt}</p>
                    <h1>{post.title}</h1>
                    <h4>
                        {Array.from(post.categoryNames).map((categoryName, index) => (
                            <span key={index}>#{categoryName} </span>
                        ))}
                    </h4>

                    <p>{post.description}</p>

                    <h4>Ingredients</h4>
                    <p>{post.ingredients}</p>

                    <h4>Recipe</h4>
                    <p>{post.recipe}</p>
                </div>


                {
                    isOwner && (
                    <div id="admin" className={style["admin"]}>
                        <a onClick={deleteThatPost} className="button">
                            Delete That Post
                        </a>
                    </div>
                )}

                <div className={style["stars"]}>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                </div>
            </div>
        </section>
        </main>
    );
};

export default PostDetails;
