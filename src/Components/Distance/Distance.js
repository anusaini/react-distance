import React from 'react'
import './Distance.css'
import OneD from './OneD.js'
import TwoD from './TwoD.js'
import ThreeD from './ThreeD.js'
import LatLongD from './LatLongD';

const Distance = () => {
    return (
        <div className="distance">
            <OneD />
            <TwoD />
            <ThreeD />
            <LatLongD />
        </div>
    )
}

export default Distance
