import React from "react"
import "../../../server"
import {Link, NavLink, useSearchParams } from "react-router-dom"
import { getVans } from "../../../api"

export default function VansPage() {

    const [listOfVans, setListOfVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setListOfVans(data)
            }
            catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
       loadVans()
    },[])
 
    const toDisplay = typeFilter ? listOfVans.filter(van => van.type === typeFilter) :
    listOfVans
    
    const displayVans = toDisplay.map(vanItem =>  (
        <div key={vanItem.id} className="van-tile">
            <Link 
                state={{search: `?${searchParams.toString()}`, type: typeFilter}}
                to={vanItem.id} 
                aria-label={`Click here to view ${vanItem.name} priced at $${vanItem.price}`}>
            <img className="van-image" src={vanItem.imageUrl} alt={`Image of ${vanItem.name}`} />
            <div className="van-detail">
                <p>{vanItem.name}</p>
                <p>${vanItem.price} <span className="price-per-day">/day</span></p>
            </div>
            <p className={`van-type ${vanItem.type} selected`}>{vanItem.type}</p>
            </Link>
        </div>
    ))
    
    /* function generateNewSearchParamString(key, value) {
        const sp = new URLSearchParams(searchParams)
        if(value === null) {
            sp.delete(key)
            } else {
                sp.set(key, value) 
        }
        return `?${sp.toString()}`
        }*/
       
       
       function handleFilterChange(key, value) {
           setSearchParams(prevSearchParams => {
               if(value === null) {
                   prevSearchParams.delete(key)
                } else {
                    prevSearchParams.set(key, value)
                }
                return prevSearchParams
            })
        }
        
        if(loading) {
            return <h1 aria-live="polite">Loading ...</h1>
        }
        
        if(error) {
         return <h1 aria-live="assertive">There was an error : {error.message}</h1>
     }
  
    return (
        <div className="vans-container">
            <h1>Explore our van options</h1>
            <div className="filter-buttons-list">
               <button className={`van-type simple ${typeFilter === 'simple' ? "selected" : null}`} onClick={() => handleFilterChange("type","simple")}>Simple</button>
               <button className={`van-type rugged ${typeFilter === 'rugged' ? "selected" : null}`} onClick={() => handleFilterChange("type","rugged")}>Rugged</button>
               <button className={`van-type luxury ${typeFilter === 'luxury' ? "selected" : null}`} onClick={() => handleFilterChange("type","luxury")}>Luxury</button>
               {typeFilter && <button className="clear" onClick={() => handleFilterChange("type",null)}>Clear filter</button>}
            </div>
            <div className="vans-list-container">
                {displayVans}
            </div>
        </div>
    ) 
}

/*
searchParams is an object. It can be any name. 
searchParams.get("type") is an instance of the native constructor URLSearchParams, 
that comes with several methods like .get() and .toString(), .set() , .delete(), .append()
*/

/*
<NavLink className={`van-type simple`} to="?type=simple">Simple</NavLink>
<NavLink className={`van-type rugged`} to="?type=rugged">Rugged</NavLink>
<NavLink className={`van-type luxury`} to="?type=luxury">Luxury</NavLink>
 <Link className="clear" to=".">Clear filters</Link>

 <Link className={`van-type simple`} to={generateNewSearchParamString("type", "simple")}>Simple</Link>
            <Link className={`van-type rugged`} to={generateNewSearchParamString("type", "rugged")}>Rugged</Link>
            <Link className={`van-type luxury`} to={generateNewSearchParamString("type", "luxury")}>Luxury</Link>
            <Link className="clear" to={generateNewSearchParamString("type", null)}>Clear filters</Link>
 */