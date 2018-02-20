import React from 'react'
import './Distance.css'
import OneD from './OneD.js'
import TwoD from './TwoD.js'
import ThreeD from './ThreeD.js'

const Distance = () => {
    return (
        <div className="distance">
            <OneD />
            <TwoD />
            <ThreeD />
        </div>
    )
}

export default Distance
