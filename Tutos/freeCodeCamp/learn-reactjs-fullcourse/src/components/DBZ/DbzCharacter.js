import React from 'react'

// data

function DbzCharacter(props){

    return(
        <div>
            <ul style={ props.team ? {backgroundColor:"#f75b19"}: {backgroundColor:"#3f0e40"}} >
                <img className="avatar" src={props.avatar}/>
                <li >
                    {props.name}
                </li>
                <li>
                    {props.power}
                </li>
                <li>
                    {props.race}
                </li>
            </ul>
        </div>
    )
}

export default DbzCharacter