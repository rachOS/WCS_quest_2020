import React from 'react'
import {Link} from 'react-router-dom'

function Gallery(){
    return (
      <div>
        <h2>
        <Link to="/">return to homepage</Link>
        </h2>
        <p>
            Welcome to my gallery page
        </p>
      </div>
    )
  }

export default Gallery;