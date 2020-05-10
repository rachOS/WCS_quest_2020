import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    console.log(props, "card")
    const { name, text, imageUrl, rarity, manaCost } = props
    return (
        <>
            <h1>Name: {name}</h1>
            <img src={imageUrl} alt={name} />
            <p> Mana cost:{manaCost}</p>
            <p>Text: {text}</p>
            <p>Rarity: {rarity}</p>
        </>
    )
}

export default Card