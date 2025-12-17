import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const {van} = useOutletContext()

    return (
        <div className="individual-van-price">
            <p>${van.price} <span className="price-per-day">/day</span></p>
        </div>
    )
}