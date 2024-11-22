import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import Cookies from "js-cookie";

function Navbar() {
    const [userRole, setUserRole] = useState('None');

    useEffect(()=>{
        const role = Cookies.get("loggedIn");
        if(role && role !== userRole){
            setUserRole(role);
        }
    }, [])

    return (
        <nav className="container">
            <div className="linkcontainer">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/Products">Products</Link>
                {userRole==='Customer' ? (
                <Link className="loginlink" to="/Account">Account</Link>):
                (<Link className="loginlink" to="/Login">Login</Link>)
                }
                {userRole ==='Customer' ? (<Link className="loginlink" to="/Cart">Cart</Link>):(null)}
            </div> 
        </nav>
    )
}

export default Navbar;