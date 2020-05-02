import React from 'react';
import TodoList from './components/TodoList'
import datas from './files/data'
import './App.css';

class App extends React.Component {

  state = { todos: datas }

  handleChange = (id) => {

    console.log(" it works",id,datas)
  }

  render() {
    console.log(this.state.todos.map( i => i.id), "render");

    const ids = datas.map(item => item.id)
    const todoID = ids.map(item => item.id)
    const todoTask = datas.map(item => item.task)
    const todoCompleted = datas.map(item => item.completed)

    return (
      <>
        <TodoList keys={todoID} task={todoTask} checked={todoCompleted} handleChange={this.handleChange}/>
      </>
    );
  }
}

export default App;
