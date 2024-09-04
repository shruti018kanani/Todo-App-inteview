import React, { useCallback, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { deleteTodolist } from '../utils/deleteTodolist'
import { toggleTodolist } from '../utils/toggleTodolist'


import { updateTodo,deleteTodo,toggleTodoCompletion, setTodo } from '../todoReduxStore/todoSlice'
import { getTODataList } from '../utils/getTodolist'

const Todocomponents = ({todo}) => {
    const todos = useSelector(state => state.todo)
    console.log(todos)
    const dispatch = useDispatch()

    const getData= async()=>{
      const res = await axios.get('http://localhost:3000/get')
      if(res?.data) {
         console.log('11. Data => ', res.data);  
         await dispatch(setTodo(res.data))
      } else {
         return null;
      }
     }

    const deletetodo=async(id)=>{
      deleteTodolist(id).then(()=>{
        getTODataList().then((res)=> {  
          dispatch(setTodo(res))
        })
      })
    }

    const toggleTodo=async(id,isCompleted)=>{
      toggleTodolist(id,isCompleted).then(()=>{
        getTODataList().then((res)=> {  
          dispatch(setTodo(res))
        })
      })
      
    }



  return (
    <div className='flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-white '>   
          {(todo.isCompleted)?<p className='p-3 line-through'>{todo.msg}</p>:<p className='p-3'>{todo.msg}</p>}
          <input type="checkbox" name="" id="" checked={todo.isCompleted} onChange={()=>toggleTodo(todo._id,todo.isCompleted)}/>
          <button onClick={()=>deletetodo(todo._id)}>Delete</button>
          
      
    </div>
  )
}

export default Todocomponents
