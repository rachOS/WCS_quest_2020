import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
// import ListPokemon from './components/ListPokemon'
// import Pokemons from './components/Pokemons'
// import PokemonDetails from './components/PokemonDetails'
import cards from './components/cards-data'
import CardsList from './components/CardsList'


function App() {
  console.log(cards)
  return (
    <Switch>
      <Route exact path="/" component={CardsList} />
    </Switch>
  );
}

export default App;
