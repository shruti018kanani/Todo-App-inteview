import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import AddTodo from './components/AddTodo';
import Todocomponents from './components/Todocomponents';
import { setTodo } from './todoReduxStore/todoSlice';
import { useState,useEffect, useMemo } from 'react';
import axios from 'axios';
import { getTODataList } from './utils/getTodolist';

function App() {
  const todos = useSelector(state => state.todo)
  const dispatch=useDispatch()
  console.log(todos);
 
   useEffect(() => {
    getTODataList().then((res)=> {  
      dispatch(setTodo(res))
    })
 
   }, [])

  const todoData = useMemo(() => {
    if(todos?.length > 0) {
      return todos
    } else {
      return []
    }
  }, [todos])

   
  return (
    <div className="w-full h-screen  max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white"
>
      <div>
      <h1 className=' flex items-center'>TODOS</h1>
      <div className="mb-4 "
      >
        <AddTodo/>
      </div>
      </div>

      <div className="flex flex-wrap gap-y-3 m-3 p-4 space-x-2"
      >
        {
          todoData?.map((prev)=>(
            <div key={prev._id}>
              <Todocomponents todo={prev}/>
            </div>
          ))
        }

      </div>
        
    
    </div>
  )
}

export default App
