import React from "react"
import {Link} from "react-router-dom"
import {getHostVans} from "../../../api"

export default function HostVans() {

    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadHostVans() {
            setLoading(true)
            try {
               const data = await getHostVans()
               setVans(data)
            }
            catch(err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        loadHostVans()
    }, [])

if(loading) {
    return <h1>Loading ...</h1>
  }

  if(error) {
    return <h1>There was an error : {error.message}</h1>
  }
 
 const vansToDisplay = vans.map(van => (
    <Link to={van.id} key={van.id}>
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
               {vans && vansToDisplay} 
           </div>
        </section>
    )
}

/*



   
*/