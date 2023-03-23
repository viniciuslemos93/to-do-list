import './TodoForm.css'


import React, { useState } from 'react'

const addTask = () => {
  console.log('Teste Função')
  
}

const TodoForm = () =>  {

  const [text, setText] = useState(null)


  const handleSubmit = e => {
    e.preventDefault()
    addTask(text)
  }

  return (
    <div>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>          
          <input className='addTask shadow' type="text" onChange={(e) => setText(e.target.value)} />
          <button className='btnAddTask shadow' onClick={ () => console.log(text)}>Adicionar</button>
        </form>
    </div>
  )
}

export default TodoForm