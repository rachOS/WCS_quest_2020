import React from 'react'
import {NavLink} from 'react-router-dom'

// CSS
import '../index.css'
// CSS

class Acceuil extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li><NavLink activeClassName="active" to='/'>Acceuil</NavLink></li>
                        <li><NavLink className="test" to='/css'>Css 3</NavLink></li>
                        <li><NavLink className="active" to='/html'>Html 5</NavLink></li>
                        <li><NavLink className="test" to='/js'>JavaScript</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Acceuil;