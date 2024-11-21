import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import Cookies from "js-cookie";

function Navbar() {
    const sessionId = Cookies.get("sessionid");
    console.log(Cookies.get("sessionid"));

    const handleLogout = async (e) => {
        e.preventDefault();

        const csrfToken = Cookies.get('csrftoken');
        if (!csrfToken) {
            console.error('CSRF token not found.');
            return
        }
        
    };

    return (
        <nav className="container">
            <div className="linkcontainer">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/Products">Products</Link>
                {sessionId ? (<Link className="loginlink" to="/Account">Account</Link>):
                (<Link className="loginlink" to="/Login">Login</Link>)
                }
            </div> 
        </nav>
    )
}

export default Navbar;