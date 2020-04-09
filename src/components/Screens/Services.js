import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
    return (
        <div className="servicesDiv">
            <img src="under_construction.svg" className="underConstructionImage" />
            <h2 className="underConstructionTitle">Under Construction</h2>
            <h3 className="underConstructionPara">Help us add the data of various services present in Maharashtra, join the group to contribute or visit <Link to="/volunteers">Volunteers Page</Link></h3>
        </div>
    )
}
