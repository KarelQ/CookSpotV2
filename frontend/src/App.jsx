
import "/src/css/style.css";
import "/src/css/nav.css";
import "/src/css/post.css";

import MainPagePosts from "/src/components/MainPagePosts.jsx";
import Nav from "/src/components/Nav.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostPage from "./components/PostPage.jsx";


function App() {
    return (
        <>
            <Nav/>
            <BrowserRouter>
                <Routes>
                    <Route path="/mainpage" element={ <MainPagePosts /> } />
                    <Route path="/postpage/:id" element={< PostPage />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
