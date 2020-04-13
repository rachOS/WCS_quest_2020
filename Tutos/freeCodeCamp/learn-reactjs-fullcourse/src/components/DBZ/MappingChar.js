import React from 'react'
import dbzCharData from '../data/dbz/dbzCharData'
import DbzCharacter from './DbzCharacter'

const dbzCharMap = dbzCharData.map( item => <DbzCharacter 
    name={item.name}
    power={item.powerLevel}
    race={item.race}
    avatar={item.image}
    team={item.zTeam}
    />
)

export default dbzCharMap;