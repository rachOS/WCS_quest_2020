import React from 'react'
import TodoItem from './TodoItem'
import './todo-list.css'

export default function TodoList(props) {

    return (
        <div className="todo-list">
            <TodoItem
                key={props.key}
                status={props.checked}
                task={props.task} />
        </div>
    )
}