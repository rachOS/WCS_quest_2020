import React from 'react';
import {NavLink } from 'react-router-dom'

// CSS
import '../index.css'
// CSS

class JsDefinition extends React.Component{
    render(){
        return(
                <section>
                    <NavLink activeClassName="active" to='/'>Menu</NavLink >
                    <article>
                        <p>
                            JS LOREM IPSUM
                            JS LOREM IPSUM
                            JS LOREM IPSUM
                            JS LOREM IPSUM
                            JS LOREM IPSUM
                        </p>
                    </article>
                </section>
        )
    }
}

export default JsDefinition;