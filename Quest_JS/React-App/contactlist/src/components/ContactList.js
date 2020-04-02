import React, {Component} from 'react';
import Contact from './Contact'
import "./Contact.css"


function ContactList (){

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

    return(
    <div>
        {users.map( index => <Contact name={index.name} avatar={index.avatar} online={index.online}/>)}
    </div>
    )
}

export default ContactList;