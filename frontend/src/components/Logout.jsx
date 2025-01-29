import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {logout} from "../services/UserService.jsx";



const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.clear()
        logout().then((response) => {
            console.log(response);
            navigate("/login");
        })
             // Przekierowanie, jeśli brak sesji
    }, [navigate]); // useEffect uruchomi się tylko raz, na początku komponentu

}

export default Logout