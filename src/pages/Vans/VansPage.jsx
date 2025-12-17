import React from "react"
import "../../../server"
import {Link} from "react-router-dom"

export default function VansPage() {

    const [listOfVans, setListOfVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
        .then(response => response.json())
        .then(data => setListOfVans(data.vans))
    }, [])
 

    const displayVans = listOfVans.map(vanItem =>  (
        <div key={vanItem.id} className="van-tile">
            <Link to={`${vanItem.id}`} aria-label={`Click here to view ${vanItem.name} priced at $${vanItem.price}`}>
            <img className="van-image" src={vanItem.imageUrl} alt={`Image of ${vanItem.name}`} />
            <div className="van-detail">
                <p>{vanItem.name}</p>
                <p>${vanItem.price} <span className="price-per-day">/day</span></p>
            </div>
            <p className={`van-type ${vanItem.type}`}>{vanItem.type}</p>
            </Link>
        </div>
    ))

    return (
        <div className="vans-container">
            <h1>Explore our van options</h1>
            <div className="vans-list-container">
                {displayVans}
            </div>
        </div>
    )
}

/*

Object

description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a compostin…"

hostId: "123"

id: "1"

imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"

name: "Modest Explorer"

price: 60

type: "simple"
*/