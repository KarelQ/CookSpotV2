
import "/src/css/style.css";
import "/src/css/nav.css";
import "/src/css/post.css";

import PostList from "/src/components/PostList.jsx";
import Nav from "/src/components/Nav.jsx";

function App() {
    return (
        <>
            <Nav/>
            <main>

                <PostList/>
            </main>
        </>
    )
}

export default App
