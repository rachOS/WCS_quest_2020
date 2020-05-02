import React from 'react'
import { Link } from 'react-router-dom';

function Podlist (props){
    const allPosts = [
        { year: '2019', month: '09', title: 'React Router v5.1 released' },
        { year: '2019', month: '09', title: 'React 16.10.0 released' },
        { year: '2019', month: '10', title: 'React Conf 2019' },
        { year: '2019', month: '10', title: 'Transition of Node.js 12 to LTS' }
      ];

    const param = props.match.params

    const filteredPosts = allPosts
    .filter( post => post.year === param.year && post.month === param.month)
    return(
        <div>
            <p><Link to="/">home</Link></p>
            <h2>
                Post for {param.month} / {param.year}
            </h2>
            {filteredPosts.map( post => (<li>{post.title}</li>) )}
        </div>
    )
}

export default Podlist