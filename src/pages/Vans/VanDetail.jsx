import React from "react"
import "../../../server"
import { useParams, Link } from "react-router-dom"

function VanDetail() {
    const [van, setVan] = React.useState(null)
    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(response => response.json())
        .then(data => setVan(data.vans))
    },[params.id])


    return (
        <>
        <div class="individual-van-detail-container">
              <Link
                to=".."
                relative="path"
                className="link-to-back"
            >&larr; <span>Back to all vans</span></Link>
            {van ? (
                <div className="individual-van-detail">
                    <img className="individual-van-image" src={van.imageUrl} alt={`Image of ${van.name}`} />
                    <p className={`van-type ${van.type}`}>{van.type}</p>
                    <p className="van-name">{van.name}</p>
                    <p className="van-price">${van.price} <span className="price-per-day">/day</span></p>
                    <p className="van-description">{van.description}</p>
                
                    <Link aria-label={`Click here to rent ${van.name} priced at $${van.price} per day`} 
                    to="." className="link-button">Rent this van</Link>
                </div>    
            ) : 
            <h2>Loading...</h2>}
        </div>
        </>
    )
}

export default VanDetail