import React, {useState} from 'react'
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const ToDoList = () => {
  return (
    <>
        <div className="container pt-4">
            <AddTodo/>
            <TodoItem/>
        </div>
    </>
  )
}

export default ToDoList
