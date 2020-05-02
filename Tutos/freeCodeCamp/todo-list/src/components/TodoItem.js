import React from 'react'
import './todo-item.css'

export default function TodoItem(props) {


    const generateList = (props) => {
        const todoStatus = props.status.map(status => <li className="list"><input className="checkbox" type="checkbox" checked={status} /></li>)
        const todoTask = props.task.map(task => <li className="list">{task}</li>)

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

    console.log(typeof props)
    return (
        <>
            {generateList(props)}
        </>
    )
}