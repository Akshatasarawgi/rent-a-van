import React from "react"
import Image from '../assets/aboutpagebanner.png'
import {Link} from "react-router-dom"

export default function AboutPage() {
    return (
        <>
        <img className="about-page-image" src={Image} alt="Background image for the about page" />
        <div className="about-page-container">
            <div className="about-page-detail">
                <h2>Don't squeeze in a sedan when you could relax in a van.</h2>
                <br />
                <p>Our mission is to enliven your road trip with the perfect travel van
                rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
                <br />
                <br />
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </div>
            <div className="about-page-bottom-card">
                <h3>Your destination is waiting.<br/>
                Your van is ready.</h3>
                <Link className="about-page-link-button" to="/vans">Explore our vans</Link>
            </div>
        </div> 
        </>   
    )
}