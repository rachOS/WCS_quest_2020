import React from 'react';
import './Contact.css';
import PropType from 'prop-types'

function Contact(props){

    return(
        <div className="Contact">
        
            <img className="avatar" src={props.avatar} alt={props.name + "avatar"}/>
            <div>
                <p className="name">{props.name}</p>
                <div className="status">
                    {props.status ? <p className="status-online"></p> : <p className="status-offline"></p>}
                    <div className="status-text">{props.status ? <p> ONLINE </p> : <p>OFFLINE</p>}</div>
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

