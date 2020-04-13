import React from 'react'
import dbzCharData from './dbzCharData'
import DbzCharacter from '../DbzCharacter';



function FilteredChar(){

    let isZTeam = []
    isZTeam = dbzCharData.filter(item => item.zTeam === true).map(item => 
        <DbzCharacter 
            name={item.name} 
            avatar={item.image}
        />)

    return(

        <p>{isZTeam}</p>
    )
}

export default FilteredChar;