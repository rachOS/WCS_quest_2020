import React from 'react';
import "./Contact.css"



function Contact(){

    const users = [
        {
          name: 'Robert Reyes',
          avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
          online: false
        },
        {
          name: 'Nellie Caldwell',
          avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
          online: true
        },
        {
          name: 'Vernon Mason',
          avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
          online: true
        },
        {
          name: 'Erica Hunt',
          avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
          online: false
        },
        {
          name: 'Juanita Phillips',
          avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
          online: true
        }
      ];
    
    return <div className="Contact">
        
          <div className="status">
            <div className="status-text">
              {users.map ( index => <li className="name">{index.name}</li>)}
            </div>
            
        	  <div>{users.map (
            index => index.online ?
            
            <ul><li><img className="avatar" src={index.avatar}/></li><li className="status-online" ></li><p>online</p></ul>
            :
            <ul><li><img className="avatar" src={index.avatar}/></li><li className="status-offline"></li><p>offline</p></ul>)}
            </div>
          </div>
        
    </div>
}

export default Contact;