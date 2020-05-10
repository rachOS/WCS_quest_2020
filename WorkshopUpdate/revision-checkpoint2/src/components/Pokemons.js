import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios'

const Pokemons = ({ pokemon, deletePok }) => {

  const [pokemonDetails,setPokemonDetails] = useState({})

  useEffect(() =>
    Axios.get(`${pokemon.url}`)
      .then(response => response.data)
      .then(data => setPokemonDetails(data))
  ,[])
  return (
    <div>
      name:
      <Link to={{ pathname: `/pokemon/${pokemonDetails.id}` , query: pokemonDetails }}>{pokemon.name}</Link>
      <button onClick={() => deletePok(pokemon.name)} >DELETE</button>
    </div>
  );
}

export default Pokemons;