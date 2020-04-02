import React, {Component} from 'react';
import "./Contact.css"
//import { ReactComponent } from '*.svg';



class Contact extends React.Component{ // convertir en Class
                    // creer un contructor et initialiser un state {onlin : false}
                    // au  clic sur le status modifie le state du online 
                    // et change le css + le texte selon un rendu conditionnel
  constructor(props){
    super(props)
    this.state = {online: false}
  }

  isOnline = event => this.state.online ? this.setState({online: false}) : this.setState({online: true});

  render(){

    return (
      <div className="Contact">

            <ul className="status">

              <li className="name">
                <p>
                  {this.props.name}
                </p>

                <img className="avatar" src={this.props.avatar} />
                
                <span onClick={this.isOnline} className={ this.state.online ? "status-online" : "status-offline"}>
                </span>

                <p>
                  {this.props.online ? "online" : "offline"}
                  {/* <button >Change status</button> */}
                </p>

              </li>
            </ul>
            
      </div>)
  }
}

export default Contact;