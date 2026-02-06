import React from "react"
import {useOutletContext} from "react-router-dom"

export default function HostVanPhotos() {
    const { van } = useOutletContext()

    return (
        <img className="van-image" src={van.imageUrl} alt={`Image of ${van.name}`} />
    )
}