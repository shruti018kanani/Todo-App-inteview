import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'

import { updateTodo,deleteTodo,toggleTodoCompletion } from '../todoReduxStore/todoSlice'

const Todocomponents = ({todo}) => {
    const todos = useSelector(state => state.todo)
    console.log(todos)
    const dispatch = useDispatch()

    const deletetodo=(id)=>{
      axios.delete('http://localhost:3000/delete',{id})
      .then((res)=>console.log(res))
      .catch((error)=>console.log(error))
    }

    const toggleTodo=(id)=>{
      axios.patch('http://localhost:3000/patch',{id})
      .then((res)=>console.log(res))
      .catch((error)=>console.log(error))
    }


  return (
    <div>   
            {(todo.isCompleted)?
            <p style={{textDecorationLine:'line-through'}}>{todo.msg}</p>:<p>{todo.msg}</p>
        }
          <input type="checkbox" name="" id="" onChange={()=>toggleTodo(todo._id)}/>
          <button onClick={()=>deletetodo(todo._id)}>Delete</button>
          
      
    </div>
  )
}

export default Todocomponents
