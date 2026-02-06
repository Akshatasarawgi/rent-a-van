import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import {getHostVans} from "../../../api"

export default function HostVanDetail() {

    const [van, setVan] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const param = useParams()

    React.useEffect(() => {
       async function loadHostVan() {
            setLoading(true)
            try {
                const data = await getHostVans(param.id)
                setVan(data)
            }
            catch(error) {
                setError(error);
            }
            finally {
                setLoading(false)
            }
       }
       loadHostVan()
    }, [param.id])

    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>There was an error :  {error.message}</h1>
    }

    return (
       <section className="host-individual-van">
            <Link
                to=".."
                relative="path"
                className="link-to-back"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-individual-van-container">
            <div className="host-individual-van-tile">
                <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                <div className="van-detail">
                    <p className={`van-type ${van.type}`}>{van.type}</p>
                    <p className="van-name"> {van.name}</p>
                    <p className="van-price">${van.price} <span className="price-per-day">/day</span></p>
                </div>
            </div>
              <nav>
                    <NavLink className={({isActive}) => isActive ? "active-link" : ""} end to=".">Details</NavLink>
                    <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="pricing">Pricing</NavLink>
                    <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="photos">Photos</NavLink>
            </nav>
            <div className="individual-van-container">
                <Outlet context = { {van} }/>
            </div>
            </div>
       </section>
    )
}