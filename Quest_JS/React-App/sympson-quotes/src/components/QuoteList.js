import React from 'react';
import QuotesCard from './QuotesCard';
import PropTypes from 'prop-types';




function QuotesList(){ 
   
    const quotes = [
        {name : "T-800" ,
        model : "machine",
        quote : "I'll be back",
        image : "https://purepng.com/public/uploads/large/purepng.com-terminatorterminatorscience-fictionactionfilmjames-cameronthe-terminatorarnold-schwarzeneggercyborgsarah-connor-1701528658992jzshl.png"},
        
        {name : "Sarah Connor" ,
        model : "human",
        quote : "Move it, Reese! On your feet soldier! ON YOUR FEET!",
        image : "http://wallsdesk.com/wp-content/uploads/2016/11/linda-hamilton-Background-.jpg"},
        
        {name : "Kyle Reese" ,
        model : "human",
        quote : "The Terminator's an infil-tration unit. Part man, part machine. Underneath, it's a hyperalloy combat chassis,mircoprocessor-controlled, fully armored. Very tough...But outside, it's living human tissue. Flesh, skin, hair...blood. Grown for the cyborgs.",
        image : "https://upload.wikimedia.org/wikipedia/hu/thumb/8/86/Kyle_Reese.png/250px-Kyle_Reese.png"},
    ]
    
    return (
        <div className="">
            {quotes.map( item =>  <QuotesCard image={item.image} quote={item.quote} character={item.name}/>)}
        </div>
    )
}

QuotesList.propTypes = {
    // characterFirstname : PropTypes.string.isRequired
}

export default QuotesList;