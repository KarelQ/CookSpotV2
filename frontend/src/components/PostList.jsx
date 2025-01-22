const Post = ({ post }) => {
    return (
        <div id={post.idPost}>
            <img src={`../public/uploads/${post.image}`} alt="post image" />
            <div>
                <div className="post-desc">
                    <h1><a href={`postpage?id=${post.idPost}`}>{post.title}</a></h1>
                    <h1>{post.idUserOwner}</h1>
                    <p>{post.description}</p>
                </div>

                <div className="post-icons">
                    <div>
                        <i className="material-symbols-outlined">signal_cellular_alt</i>
                        <span>{post.difficulty}</span>
                    </div>
                    <div>
                        <i className="material-symbols-outlined">thumb_up</i>
                        <span>{post.like}</span>
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
        </div>
    );
};


const PostList = ({ posts }) => {
    return (
        <main>
            <section className="posts">
                {posts.map((post) => (
                    <Post key={post.idPost} post={post} />
                ))}
            </section>
        </main>
    );
};



export default PostList;
