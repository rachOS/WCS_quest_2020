import React from 'react'
import {Link} from 'react-router-dom'

function Contact(){
    return (
      <div>
        <h2>
            <Link to="/">return to home page</Link>
        </h2>
        <p>
            contactez nous
        </p>
      </div>
    )
  }

export default Contact;