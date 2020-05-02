import React from 'react'
import './todo-item.css'

export default function TodoItem(props) {

    const ids = props.keys.map( id => id)
    const generateList = (prop) => {

        const todoStatus = prop.status
            .map(status => <li
                key={props.keys}
                className="list">
                <input
                    className="checkbox"
                    type="checkbox"
                    onChange={() => props.handleChange(ids.map(i=>i))}
                    checked={status} />
            </li>)

        const todoTask = prop.task
            .map(task => <li key={props.keys} className="list">{task}</li>)

        return (
            <div className="total-list">
                <ul className="list-handler">
                    {todoStatus}
                </ul>
                <ul className="list-handler">
                    {todoTask}
                </ul>
            </div>
        )
    }

    console.log(ids,"items")
    return (
        <>
            {generateList(props)}
        </>
    )
}