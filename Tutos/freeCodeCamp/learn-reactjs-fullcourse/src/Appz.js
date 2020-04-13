import React from 'react'
import Test from './components/Test'
import FilteredChar from './components/data/FilterChar'
import dbzCharMap from './components/data/MappingChar'

// data

function Appz(){

    return(
        <div>
            {dbzCharMap}
        </div>
    )
}

export default Appz