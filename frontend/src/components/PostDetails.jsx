import "../css/style.css"; // Import pliku globalnego
import style from '/src/css/post-detales.module.css'

const PostDetails = ({ post, rate, book, category, isAdmin }) => {
    return (
        <main>
        <section className={`${style.posts} rate book category`}>
            <div id={post.idPost}>
                <div className={style["post-content"]}>
                    <img src={`/public/uploads/${post.image}`} alt="post image" className={style["post-image"]}/>

                    <div className={style["post-icons"]}>
                        <div>
                            <i className="material-symbols-outlined">account_circle</i>
                        </div>
                        <span>{post.userOwner}</span>
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

                    <div className={style["bookmark-container"]}>
                        <div className="bookmark-text">
                            <span id="bookmark-text" className={book ? style.pressed : ''}>
                                {book ? 'Bookmarked' : 'Bookmark'}
                            </span>
                        </div>

                        <div className="bookmark">
                            <i
                                className={`bookmark material-symbols-outlined hover ${book ? style.pressed : ''}`}
                                id="bookmark"
                            >bookmark</i>
                        </div>
                    </div>
                </div>

                <div className={style["post-desc"]}>
                    <p className="date">Posted on: {post.createdAt}</p>
                    <h1>{post.title}</h1>

                    {/*TODO bedze sprawiac problemy*/}
                    <h4>
                        {category.map(cat => `#${cat} `)}
                    </h4>

                    <p>{post.description}</p>

                    <h4>Ingredients</h4>
                    <p>{post.ingredients}</p>

                    <h4>Recipe</h4>
                    <p>{post.recipe}</p>
                </div>

                {isAdmin && (
                    <div id="admin" className={style["admin"]}>
                        <a href={`/deletepost?id=${post.idPost}`} className="button">
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
