import React from "react";
import LoginForm from '../../components/LoginForm/LoginForm'
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
    const navigate = useNavigate();
    const handleLogin = (userRole, userId) => {
        Cookies.set('loggedIn', userRole);
        Cookies.set('userid', userId);
        navigate("/");
    }

    return (
        <div>
            <LoginForm onLogin={handleLogin}/>
        </div>
    )
}

export default Login;