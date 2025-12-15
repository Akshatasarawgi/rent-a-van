import React from "react"
import {Link, NavLink} from 'react-router-dom'

function Header() {
    return (
        <header>
            <Link to="/" className="header-logo">#VANLIFE</Link>
            <nav>
                <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/vans">Vans</NavLink>
            </nav>
        </header>
    )
}

export default Header