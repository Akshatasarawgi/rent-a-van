import React from "react"
import { Outlet, NavLink } from "react-router-dom"

export default function HostLayout() {
    return (
        <div className="host-page-container">
            <nav className="host-page-nav">
                <NavLink end className={( {isActive} ) => isActive ? "active-link" : ""} to=".">Dashboard</NavLink>
                <NavLink className={( {isActive} ) => isActive ? "active-link" : ""} to="income">Income</NavLink>
                <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="vans">Vans</NavLink>
                <NavLink className={( {isActive} ) => isActive ? "active-link" : ""} to="reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </div>

    )
}