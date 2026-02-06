import React from "react"
import { getVans } from "../../../api"
import { useParams, Link, useLocation } from "react-router-dom"

function VanDetail() {
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const params = useParams()
    const location = useLocation()
    console.log(location)

    React.useEffect(() => {
       async function loadVan() {
        setLoading(true)
        try {
            const data = await getVans(params.id)
            setVan(data)
        }
        catch(err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
       }
       loadVan()
    },[params.id])

    if(loading) {
        return <p>Loading....</p>
    }

    if(error) {
        return <p>There was an error : {error.message}</p>
    }
    return (
        <>
        <div className="individual-van-detail-container">
              <Link
                to={location.state?.search ? `../${location.state.search}` : ".."}
                relative="path"
                className="link-to-back"
            >&larr; <span>Back to {location.state.type ? `${location.state.type}` : `all`} vans</span></Link>
            
            {van && (
                <div className="individual-van-detail">
                    <img className="individual-van-image" src={van.imageUrl} alt={`Image of ${van.name}`} />
                    <p className={`van-type ${van.type}`}>{van.type}</p>
                    <p className="van-name">{van.name}</p>
                    <p className="van-price">${van.price} <span className="price-per-day">/day</span></p>
                    <p className="van-description">{van.description}</p>
                
                    <Link aria-label={`Click here to rent ${van.name} priced at $${van.price} per day`} 
                    to="." className="link-button">Rent this van</Link>
                </div>    
            )} 
        </div>
        </>
    )
}

export default VanDetail