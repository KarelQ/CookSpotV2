import React, {useEffect, useState} from "react";
import style from "/src/css/login.module.css";
import {login} from "../services/UserService.jsx";
import {v4 as uuidv4} from "uuid";

const Login = () => {
    const [messages, setMessages] = useState(["Example error message"]); // Przykładowe dane

    const [email, setEmail] = useState([""]);
    const [password, setPassword] = useState("");



    function loginRequest(e) {
        e.preventDefault();


        const user = {
            email,
            password,

        }
        console.log(user);

        login(user).then((response) => {
            console.log(response.data);

        });
    }
    return (
        <div className={style["base-container-login"]}>
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
