import React from 'react'

function Todo(props){
    console.log(props)
    return(
        <form action="">
            <label for={props.postIt.labelId} >{props.postIt.label}</label>
            <input type={props.postIt.inputType} id={props.postIt.inputId}/>
        </form>
    )
}

export default Todo;
