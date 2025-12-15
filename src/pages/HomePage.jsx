import React from 'react'
import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div className="home-page-container">
            <h1 className="home-page-header">You got the travel plans, we got the travel vans.</h1>
            <p className="home-page-details">Add adventure to your life by joining the #vanlife movement.<br />
            Rent the perfect van to make your perfect road trip. </p>
            <Link to="/vans" className="link-button">Find your van</Link>
        </div>
    )
}

export default HomePage