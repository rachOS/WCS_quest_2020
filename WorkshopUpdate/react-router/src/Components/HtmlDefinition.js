import React from 'react'
import {NavLink} from 'react-router-dom'

// CSS
import '../index.css'
// CSS

class HtmlDefinition extends React.Component{
    render(){
        return(
            <section>
                <NavLink activeClassName="active" to='/'>Menu</NavLink>
                <article>
                    <p>
                    HTML IPSUM
                    HTML IPSUM
                    HTML IPSUM
                    HTML IPSUM
                    HTML IPSUM
                    </p>
                </article>
            </section>
        )
    }
}
export default HtmlDefinition;