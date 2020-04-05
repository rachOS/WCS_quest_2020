import React from 'react';
import './QuotesCard.css';
// import PropTypes from 'prop-types';

class QuotesCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {favorite : false};
    }

    favIt = event => this.state.favorite ? this.setState({favorite : false}) : this.setState({favorite : true}) ; 
        /* 
            ou bien
            event => {
            const newFavorite = !this.state.favorite;  
            this.setState({ favorite: newFavorite });
          } */

    render(){

        return(
            <figure className="QuoteCard">
                <img className="img" src={this.props.image} alt={this.props.character}/>
                <figcaption>
                    <blockquote>
                        {this.props.quote}
                    </blockquote>
                    <p>
                        <cite>{this.props.character}</cite>
                        <span onClick={this.favIt} className={this.state.favorite ? 'fav' : 'unfav'}>&#9733; </span>
                    </p>
                </figcaption>
            </figure>
        )
   } 
};

/* QuotesCard.propTypes = {
    characterFirstname : PropTypes.string.isRequired
} */

export default QuotesCard;