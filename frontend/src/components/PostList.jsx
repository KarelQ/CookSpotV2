const samplePosts = [
    {
        idPost: "post1",
        idUserOwner: "user123",
        title: "Pyszne Spaghetti",
        description: "Szybki przepis na domowe spaghetti z sosem pomidorowym.",
        ingredients: "Makaron, pomidory, czosnek, bazylia",
        recipe: "1. Ugotuj makaron. 2. Przygotuj sos. 3. Wymieszaj i podaj.",
        image: "test_image.jpg",
        prepTime: "30 min",
        difficulty: "Łatwy",
        numberOfServings: 4,
        createdAt: "2025-01-16",
        like: 10,
        dislike: 1,
    },
    {
        idPost: "post2",
        idUserOwner: "user456",
        title: "Domowe Brownie",
        description: "Prosty sposób na czekoladowe brownie.",
        ingredients: "Czekolada, masło, cukier, mąka, jajka",
        recipe: "1. Rozpuść czekoladę. 2. Wymieszaj składniki. 3. Piecz przez 25 min.",
        image: "test_image.jpg",
        prepTime: "45 min",
        difficulty: "Średni",
        numberOfServings: 8,
        createdAt: "2025-01-15",
        like: 25,
        dislike: 2,
    },
    {
        idPost: "post3",
        idUserOwner: "user789",
        title: "Śniadaniowa Owsianka",
        description: "Zdrowa owsianka na dobry początek dnia.",
        ingredients: "Płatki owsiane, mleko, banan, miód",
        recipe: "1. Podgrzej mleko. 2. Dodaj płatki. 3. Posyp owocami i polej miodem.",
        image: "test_image.jpg",
        prepTime: "15 min",
        difficulty: "Łatwy",
        numberOfServings: 2,
        createdAt: "2025-01-14",
        like: 15,
        dislike: 0,
    }
];

import '/src/css/post.css';
import '/src/css/style.css';


const Post = (post ) => {
    return (
        <div id={post.idPost}>
            <img src={`../public/uploads/${post.image}`} alt="post image" />
            <div>
                <div className="post-desc">
                    <h1><a href={`postpage?id=${post.idPost}`}>{post.title}</a></h1>
                    <h1>{post.userOwner}</h1>
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

const PostList = () => {
    return (
        <section className="posts">
            {samplePosts.map((post) => (
                <Post key={post.idPost} post={post} />
            ))}
        </section>
    );
};

export default PostList;
