import React from "react";
import LoginForm from '../../components/LoginForm/LoginForm'
import { useNavigate, Link } from "react-router-dom";
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
            <h3>Don't have an account? Register here:</h3>
            <nav>
                <div>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </div>
    )
}

export default Login;