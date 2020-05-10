import React, { useEffect,useState } from 'react';

const PokemonDetails = ({ location }) => {
    console.log(location)
    return (
        <div>
            name: {location.query.name}
            height:
        </div>
    );
}

export default PokemonDetails;