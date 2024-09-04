import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setTodo} from '../todoReduxStore/todoSlice';
import { addTodolist } from '../utils/addTodolist';
import { getTODataList } from '../utils/getTodolist';


const AddTodo = () => {
    const [text,setText]=useState("")
    const dispatch = useDispatch()
    
    const handlesubmit=(e)=>{
      e.preventDefault()
      addTodolist(text).then(()=>{
        getTODataList().then((res)=> {  
          dispatch(setTodo(res))
        })
      })
      setText('')
    }

  return (
    <div className=' flex m-4 space-x-1'>
      <input type="text" required  value={text} onChange={(e)=>setText(e.target.value)}
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    />
      <button type='submit' onClick={handlesubmit} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">ADD</button>
    </div>
  )
}

export default AddTodo
