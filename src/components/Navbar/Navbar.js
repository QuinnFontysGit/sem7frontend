import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav className="container">
            <div className="linkcontainer">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/Products">Products</Link>
                <Link className="loginlink" to="/Login">Login</Link>
            </div> 
        </nav>
    )
}

export default Navbar;