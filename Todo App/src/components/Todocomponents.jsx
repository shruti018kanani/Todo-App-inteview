import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'

import { updateTodo,deleteTodo,toggleTodoCompletion } from '../todoReduxStore/todoSlice'

const Todocomponents = ({todo}) => {
    const todos = useSelector(state => state.todo)
    console.log(todos)
    const dispatch = useDispatch()

    const deletetodo=async(id)=>{
      await axios.delete('http://localhost:3000/delete',{id})
      .then((res)=>console.log(res))
      .catch((error)=>console.log(error))
    }

    const toggleTodo=async(id,isCompleted)=>{
      await axios.patch('http://localhost:3000/patch',{id,isCompleted})
      .then((res)=>console.log(res))
      .catch((error)=>console.log(error))
    }


  return (
    <div className='flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-white '>   
          <p className='p-3'>{todo.msg}</p>
          <input type="checkbox" name="" id="" checked={todo.isCompleted} onChange={()=>toggleTodo(todo._id,todo.isCompleted)}/>
          <button onClick={()=>deletetodo(todo._id)}>Delete</button>
          
      
    </div>
  )
}

export default Todocomponents
