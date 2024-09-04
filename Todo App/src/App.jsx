import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import AddTodo from './components/AddTodo';
import Todocomponents from './components/Todocomponents';
import { setTodo } from './todoReduxStore/todoSlice';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  const todos = useSelector(state => state.todo)
  const dispatch=useDispatch()
  console.log(todos);
 
   useEffect(() => {
    const getData= async()=>{
      const res = await axios.get('http://localhost:3000/get')
      if(res?.data) {
         console.log('Data => ', res.data);  
         return res.data
      } else {
         return null;
      }
     }

    getData().then((res)=> {
      console.log('1. res ==> ', res);
      dispatch(setTodo(res))
    })
 
   }, [])

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
          todos.map((prev)=>(
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
