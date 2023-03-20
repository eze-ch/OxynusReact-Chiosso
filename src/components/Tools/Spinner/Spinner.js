import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
import './Spinner.scss'

function Spinner() {
    return (
        <div className="spinner">
            {<ScaleLoader 
            color="#ff4400"
            size={200}
            speedMultiplier={1}
            />}
        </div>
    )
}

export default Spinner;