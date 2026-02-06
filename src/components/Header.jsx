import React from "react"
import {Link, NavLink} from 'react-router-dom'

function Header() {

    function handleLogout() {
        localStorage.removeItem("loggedIn")
    }
    return (
        <header>
            <Link to="/" className="header-logo">#VANLIFE</Link>
            <nav>
                <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/vans">Vans</NavLink>
                <Link to="login">Login</Link>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </header>
    )
}

export default Header