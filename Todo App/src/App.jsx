import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import AddTodo from './components/AddTodo';
import Todocomponents from './components/Todocomponents';
import { setTodo } from './todoReduxStore/todoSlice';
import { useState,useEffect } from 'react';

function App() {
  const todos = useSelector(state => state.todo)
  const dispatch=useDispatch()
  console.log(todos);
  

  return (
    <div>
    <AddTodo/>
    
    <div> Todos: </div>
    {
      todos.map((prev)=>(
        <div key={prev.id}>
          <Todocomponents todo={prev}/>
        </div>
      ))
    }
    </div>
  )
}

export default App
