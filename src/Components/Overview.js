import React from 'react'
import { useSelector } from 'react-redux'

import { selectDisplay } from '../redux/slices/displayCountrySlice'

const Overview = () => {
    const currentDisplay = useSelector(selectDisplay)

    return (
        <div className='stack'>
            <h1>{currentDisplay.name.official}</h1>
            <h3>Nickname:</h3>
            <p>{currentDisplay.name.common}</p>
            <h3>Population:</h3>
            <p>{currentDisplay.population}</p>
            <h3>Start of Week:</h3>
            <p>{currentDisplay.startOfWeek.toUpperCase()}</p>
        </div>
    )
}

export default Overview