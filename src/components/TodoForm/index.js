import './TodoForm.css'


import React, { useState } from 'react'

const TodoForm = () =>  {

  const [text, setText] = useState(null)

  const addTask = () => {
    console.log('Teste Função')
    
  }

  return (
    <div>
        <h1>To Do List</h1>
        <div>
          <input className='addTask shadow' type="text" onChange={(e) => setText(e.target.value)} />
          <button className='btnAddTask shadow' onClick={ () => console.log(text)}>Adicionar</button>
        </div>
    </div>
  )
}

export default TodoForm