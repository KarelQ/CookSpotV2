import React, {useEffect, useState} from "react";
import style from "/src/css/login.module.css";
import {login} from "../services/UserService.jsx";
import {v4 as uuidv4} from "uuid";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [messages, setMessages] = useState([""]); // Przykładowe dane

    const [email, setEmail] = useState([""]);
    const [password, setPassword] = useState("");

    const navigate = useNavigate();



    function loginRequest(e) {
        e.preventDefault();


        const user = {
            email,
            password,

        }
        console.log(user);

        login(user).then((response) => {
            console.log(response.data);

            if(response.data !== ""){
                sessionStorage.setItem("sessionUserId", response.data[0]);
                sessionStorage.setItem("sessionUsername", response.data[1]);
                sessionStorage.setItem("sessionIdRole", response.data[2]);

                navigate(`/mainpage`);

            } else {
                setMessages(["Wrong email or password"]);
            }
            console.log(sessionStorage.getItem("sessionUserId"));


        });
    }

    return (

        <div id={"login"} className={style["base-container-login"]}>
            <div className={style["login-container"]}>
                <img src="/src/assets/logo_with_name.png" alt="logo alt"/>

                <form>
          <span className={style["messages"]}>
            {messages &&
                messages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
          </span>
                    <input
                        name="email"
                        type="text"
                        placeholder="email"
                        className={style["input-text"]}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        className={style["input-text"]}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={loginRequest} type="submit" className={style["input-text"]}>
                        Login
                    </button>
                    <a href="register">
                        {`Don't have an account?`} <span>Create account</span>
                    </a>
                </form>
            </div>
        </div>

        );
        };

        export default Login;
