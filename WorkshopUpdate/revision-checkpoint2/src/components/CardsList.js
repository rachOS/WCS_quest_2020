import React from 'react'
import Axios from 'axios' //https://api.magicthegathering.io/v1/cards
import { Link } from 'react-router-dom'
import cards from './cards-data'
import Card from './Card'

class CardsList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cards:[],
        }
    }

    componentDidMount(){
        Axios.get('https://api.magicthegathering.io/v1/cards')
        .then(response => response.data)
        .then(data => this.setState({cards: data.cards}))

    }

    render() {
        console.log(this.state.cards)
        const {cards} = this.state
        return (
            <>
                <Link to={{ pathname: "/" }}> LINK</Link>
                {
                    cards.map((card, index) => <Card key={cards.id}{...cards[index]} />)
                }

            </>
        )
    }


}

export default CardsList