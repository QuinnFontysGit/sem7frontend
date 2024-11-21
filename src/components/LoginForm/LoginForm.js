import React, { useState } from "react";
import api from "../../api/axios";
import Cookies from "js-cookie";

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const csrfToken = Cookies.get('csrftoken');
        if (!csrfToken) {
            console.error('CSRF token not found.');
            return
        }
        try {
            await api.post("/login/", { username, password, otp }, 
            {headers: {'X-CSRFToken': csrfToken, }});
            onLogin();
        } catch (err) {
            setError(err.response?.data?.error || "Login failed.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} 
            onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="text" placeholder="One time password" value={otp} 
            onChange={(e) => setOtp(e.target.value)}
            />
            <button type="submit">Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};

export default LoginForm;
