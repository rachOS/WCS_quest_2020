import React from 'react';
import './Contact.css';
import PropType from 'prop-types'

function Contact(props){
    return(
        <div className="Contact">
            <div>
                <img className="avatar" src={props.avatar} alt={props.name + "avatar"}/>
            </div>

            <div className="status">
                <p className="name">{props.name}</p>
                <div className="status-text">
                    {props.status ? <p className="status-online" >ONLINE</p>: <p className="status-offline">OFFLINE</p>}
                </div>
            </div>
            
        </div>
    )
}

Contact.prototype = {
    name : PropType.string.isRequired,
    avatar : PropType.string.isRequired,
    online : PropType.bool.isRequired
}
export default Contact;

