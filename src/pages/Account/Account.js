import React, {useState} from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

function Account() {
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const csrfToken = Cookies.get('csrftoken');
        if (!csrfToken) {
            console.error('CSRF token not found.');
            return
        }

    const handleLogout = async () => {
        try {
            await api.post("/logout/", {}, 
            {headers: {'X-CSRFToken': csrfToken, }});
        } catch (err) {
            setError(err.response?.data?.error || "Logout failed.");
        }
        Cookies.remove('loggedIn');
        Cookies.remove('userid');
        navigate("/");
    }

    return (
        <div>
            <form onSubmit={handleLogout}>
                <button type="submit">Log out</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    )
}

export default Account;