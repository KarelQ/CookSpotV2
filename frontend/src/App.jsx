
import "/src/css/style.css";
import "/src/css/nav.css";
import "/src/css/post.css";

import MainPagePosts from "/src/components/MainPagePosts.jsx";
import Nav from "/src/components/Nav.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostPage from "./components/PostPage.jsx";
import AddPost from "./components/AddPost.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import MyProfile from "./components/MyProfile.jsx";
import ExploreCategory from "./components/ExploreCategory.jsx";
import ExploreCategoryPosts from "./components/ExploreCategoryPosts.jsx";
import Logout from "./components/Logout.jsx";
import ModifyDetails from "./components/ModifyDetails.jsx";


function App() {
    return (
        <>

            <BrowserRouter>

                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>


                    {/* Private routes */}

                    <Route path="/mainpage" element={<> <Nav/> <MainPagePosts/>  </>}/>
                    <Route path="/addpost" element={<> <Nav/> <AddPost/> </>}/>
                    <Route path="/postpage/:id" element={<> <Nav/>< PostPage/> </>}/>
                    <Route path="/explore" element={<> <Nav/>< ExploreCategory/> </>}/>
                    <Route path="/category/:id" element={<> <Nav/>< ExploreCategoryPosts/> </>}/>
                    <Route path="/myprofile" element={<> <Nav/>< MyProfile/> </>}/>
                    <Route path="/adddetails" element={<> <Nav/>< ModifyDetails/> </>}/>


                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App
