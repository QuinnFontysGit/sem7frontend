import React from "react";
import LoginForm from '../../components/LoginForm/LoginForm'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/");
    }

    return (
        <div>
            <LoginForm onLogin={handleLogin}/>
        </div>
    )
}

export default Login;