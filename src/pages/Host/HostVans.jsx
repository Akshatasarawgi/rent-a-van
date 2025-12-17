import React from "react"
import {Link} from "react-router-dom"

export default function HostVans() {

    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
        .then(response => response.json())
        .then(data => setVans(data.vans))
    }, [])

  const vansToDisplay = vans.map(van => (
    <Link to={`${van.id}`} key={van.id}>
    <div key={van.id} className="host-individual-van-tile">
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        <div className="host-individual-van-tile-detail">
            <p className="host-van-name">{van.name}</p>
            <p className="host-van-price">{`$${van.price}/day`}</p>
        </div>
    </div>
    </Link>
  ))

    return (
        <section className="host-vans-container">
           <h1>Your listed vans</h1> 
           <div className="host-vans-list">
               {vansToDisplay} 
           </div>
        </section>
    )
}