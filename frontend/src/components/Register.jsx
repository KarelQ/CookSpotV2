import React, {useEffect, useState} from "react";
import style from "/src/css/login.module.css";
import { register} from "../services/UserService.jsx";
import {v4 as uuidv4} from "uuid";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [messages, setMessages] = useState(["Example error message"]); // Przykładowe dane

    const [email, setEmail] = useState([""]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const navigate = useNavigate();

    const [idUser, setUniqueId] = useState("");
    useEffect(() => {
        const newId = uuidv4();
        setUniqueId(newId);
    }, []);

    function registerRequest(e) {
        e.preventDefault();


        const user = {
            email,
            username,
            password,
            idUser,
        }
        console.log(user);


        register(user).then((response) => {
            console.log(response.data);
            navigate(`/login`);
        });
    }
    return (
        <div id={"login"} className={style['base-container-login']}>
            <div className={style['login-container']}>
                <img src="/src/assets/logo_with_name.png" alt="logo alt"/>

                <form>
                    <span className={style['messages']}>
                        {messages.map((message, index) => (
                            <p key={index}>{message}</p>
                        ))}
                    </span>

                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        className={style['input-text']}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className={style['input-text']}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className={style['input-text']}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        name="conf_password"
                        type="password"
                        placeholder="Repeat password"
                        className={style['input-text']}
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                    />
                    <button onClick={registerRequest} type="submit" className={style['input-text']}>
                        Confirm
                    </button>
                    <a href="login">
                        Have an account? <span>Login</span>
                    </a>
                </form>
            </div>
        </div>
    );
};

export default Register;
