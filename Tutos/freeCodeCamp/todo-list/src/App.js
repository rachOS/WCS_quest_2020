import React from 'react';
import TodoList from './components/TodoList'
import datas from './files/data'
import './App.css';

function App() {

  const todoTask = datas.map(item => item.task)
  const todoID = datas.map(item => item.id)
  const todoCompleted = datas.map(item => item.completed)


  return (
    <>
      <TodoList key={todoID} task={todoTask} checked={todoCompleted} />
    </>
  );
}

export default App;
