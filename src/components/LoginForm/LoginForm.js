import React, { useState } from "react";
import api from "../api/axios";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post("/login/", { username, password });
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
            <button type="submit">Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};

export default Login;
