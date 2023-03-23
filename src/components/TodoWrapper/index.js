import React, { useState } from "react"
import TodoForm from "../TodoForm"
import React, { v4 as uuidv4 } from "uuid"
uuidv4()


const TodoWrapper = () =>  {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        setTodos([...todos,{id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }
    return (
        <div>
            <TodoForm addTodo={addTodo} />
        </div>
    )

  }

  export default TodoWrapper