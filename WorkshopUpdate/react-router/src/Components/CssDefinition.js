import React from 'react'
import {NavLink} from 'react-router-dom'

// CSS
import '../index.css'
// CSS

class CssDefinition extends React.Component{
    render(){
        return(
                <section>
                    <NavLink activeClassName="test" to='/'>Menu</NavLink>
                        <article>
                            <p>
                                lorem ipsum
                                lorem ipsum
                                lorem ipsum
                                lorem ipsum
                                lorem ipsum
                            </p>
                        </article>
                </section>
        )
    }
}

export default CssDefinition