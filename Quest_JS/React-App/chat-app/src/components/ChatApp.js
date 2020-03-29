import React from 'react';
import './ChatApp.css';

const name = 'T-800';
const online = true;


function ChatApp(){
    return(
        <div className="Contact">

            <img className="avatar" src="https://i.ytimg.com/vi/br8-4sUMf3I/maxresdefault.jpg" alt="T-800 avatar"/>
            
            <div className="status">
                <p className="name">{name}</p>
                <div className="status">
                    {online ? 
                    <div className="status-online"> <p >Online</p></div> 
                    :
                    <div className="status-offline"> <p>Offline</p></div>}
                </div>
            </div>
            

        </div>
    )
}

export default ChatApp;

/* <div className="name">{name}</div>

<div className="status">
    <div className="status-text">
        {online ? <p className="status-online">Online</p> : <p className="status-offline">Offline</p>}
    </div>
</div> */