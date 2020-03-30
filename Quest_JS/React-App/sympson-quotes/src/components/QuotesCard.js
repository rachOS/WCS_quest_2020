import React from 'react';
import './QuotesCard.css'
import PropTypes from 'prop-types';

function QuotesCard(props){
    return(
        <figure className="QuoteCard">
            <img src={props.image} alt={props.character}/>
            <figcaption>
                <blockquote>
                    {props.quote}
                </blockquote>
                <cite>{props.character}</cite>
            </figcaption>
        </figure>
    )
};

QuotesCard.propTypes = {
    characterFirstname : PropTypes.string.isRequired
}

export default QuotesCard;