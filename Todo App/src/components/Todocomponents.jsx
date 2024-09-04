import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { updateTodo,deleteTodo,toggleTodoCompletion } from '../todoReduxStore/todoSlice'

const Todocomponents = ({todo}) => {
    const todos = useSelector(state => state.todo)
    console.log(todos)
    const dispatch = useDispatch()
  return (
    <div>   
            {(todo.isCompleted)?
            <p style={{textDecorationLine:'line-through'}}>{todo.msg}</p>:<p>{todo.msg}</p>
        }
          
          <input type="checkbox" name="" id="" onChange={() => dispatch(toggleTodoCompletion({ id: todo.id }))}/>

          <button onClick={()=>dispatch(deleteTodo(todo))}>Delete</button>
          
          <button onClick={() => {
            const msg = prompt("Enter new message");
            if (msg) {
              dispatch(updateTodo({ msg, id: todo.id, isCompleted: todo.isCompleted }))
            }
          }}>Edit</button>
      
    </div>
  )
}

export default Todocomponents
