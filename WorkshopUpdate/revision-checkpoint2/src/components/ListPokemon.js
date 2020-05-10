import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Pokemons from './Pokemons'

class ListPokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: []
        }
    }

    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.data.results)
            .then(datas => this.setState({ pokemons: datas }))
    }

    deletePokemon = (name) => {
        const { pokemons } = this.state
        const newPoks = pokemons.filter(pokemon => pokemon.name !== name)
        this.setState({ pokemons: newPoks })
    }
    render() {
        const { pokemons } = this.state
        return (
            <div>
                <Link to="/">
                    ListPokemon
                </Link>
                {
                    pokemons
                        .map(pokemon =>
                            <Pokemons
                                key={pokemon.name}
                                pokemon={pokemon}
                                deletePok={this.deletePokemon}
                            />
                        )
                }
            </div>
        )
    }

}


export default ListPokemon