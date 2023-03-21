import './TodoForm.css'

import React from 'react'

const TodoForm = () =>  {
  return (
    <div>
        <h1>To Do List</h1>
        <div>
          <input className='addTask shadow' type="text" />
          <button className='btnAddTask shadow'>Adicionar</button>
        </div>
    </div>
  )
}

export default TodoForm