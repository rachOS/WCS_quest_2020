import React from 'react';
import './QuoteForm.css';

const MAX_LENGHT = 30;

class QuoteForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {character: "" }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){

        const stock = event.target.value

        if( stock.length <= MAX_LENGHT){
            
            return this.setState({character: event.target.value});
        };

    }

    handleSubmit(event){
        event.preventDefaultListener();        
    }

    render() {
      return (
        <form className="QuoteForm" onSubmit={this.handleSubmit}>

            <label  htmlFor="character">Character:</label>

            <input className={ this.state.character.length < MAX_LENGHT ? "length-ok" : "length-maximum-reached"} 
                id="character" name="character" type="text" value={this.state.character}
                /* onChange={(event) => {
                const input = event.target;
                console.log('NAME:', input.name, 'VALUE:', input.value);
                }} */

             onChange={this.handleChange}

                // onChange={event => this.setState({character: event.target.value})}
            />
            <input type="submit" value="Submit"/>
            <p>Here comes e new challenger {this.state.character}</p>
            <p>{MAX_LENGHT - this.state.character.length} characters remaning</p>

        </form>
      );
    }
  }
  


  export default QuoteForm;