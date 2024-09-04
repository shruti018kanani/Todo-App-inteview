import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../todoReduxStore/todoSlice';
import axios from 'axios'

const AddTodo = () => {
    const [text,setText]=useState("")
    const dispatch = useDispatch()
    const handlesubmit=(e)=>{
      e.preventDefault()
      dispatch(addTodo(text))
      setText('')
    }

    

  return (
    <div>
      <input type="text"  value={text} onChange={(e)=>setText(e.target.value)} />
      <button type='submit' onClick={handlesubmit}>ADD</button>
    </div>
  )
}

export default AddTodo
