import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"

export default function HostVanDetail() {

    const [van, setVan] = React.useState({})
    const param = useParams()

    React.useEffect(() => {
        fetch(`/api/host/vans/${param.id}`)
        .then(res => res.json())
        .then(data =>setVan(data.vans[0]) )
    }, [param.id])

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
            <Outlet context = { {van} }/>
            </div>
       </section>
    )
}