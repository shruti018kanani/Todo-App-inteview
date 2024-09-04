import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


const initialState={
    todo:[],
}

export const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        setTodo:(state,action)=>{
            state.todo.push(...action.payload)
        },
        addTodo:(state,action)=>{
            const newtodo={
                msg:action.payload,
                id:Date.now(),
                isCompleted:false
            }
            state.todo.push(newtodo)
            axios.post('http://localhost:3000/add',{msg:newtodo.msg,isCompleted:false})
            .then((res)=>console.log(res))
            .catch((error)=>console.log(error))
        },
        // deleteTodo:(state,action)=>{
        //     state.todo=state.todo.filter((prev)=>prev.id!==action.payload.id)
        //     axios.delete('http://localhost:3000/delete',{id})
        //     .then((res)=>console.log(res))
        //     .catch((error)=>console.log(error))
        // },

        updateTodo: (state, action) => {
            const todoToUpdate = state.todo.find(todo => todo.id === action.payload.id)
            if (todoToUpdate) {
                todoToUpdate.msg = action.payload.msg  
                todoToUpdate.isCompleted = action.payload.isCompleted 
            }
        },
        // toggleTodoCompletion: (state, action) => {
        //     const todoToToggle = state.todo.find(todo => todo.id === action.payload.id)
        //     if (todoToToggle) {
        //         todoToToggle.isCompleted = !todoToToggle.isCompleted
        //     }
        // }
       
    }
})

export const {addTodo,deleteTodo,updateTodo,toggleTodoCompletion,setTodo}=todoSlice.actions

export default todoSlice.reducer