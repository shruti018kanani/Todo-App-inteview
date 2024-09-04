import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { Todos } from './models/Todos.models.js'
const app=express()
app.use(cors())
app.use(express.json())


;(async ()=>{
    try{
       const connectionInstance=await mongoose.connect('mongodb+srv://shrutikanani:shruti08@cluster0.yoo5x1m.mongodb.net/Todos')
       app.on("error",(error)=>{
        console.log("ERROR:not able to listen db",error);
        throw error
       })
       console.log(`\n MongoDB connectes !! DB HOST:${connectionInstance.connection.host}`);
    }catch(error){
        console.error("ERROR:",error)
        throw error
    }
})()

app.post('/add',(req,res)=>{
    const {msg,isCompleted}=req.body
    Todos.create({msg:msg,isCompleted:isCompleted})
    .then((result)=>res.json("account created"))
    .catch((err)=>res.json(err))
})

app.get('/get',(req,res)=>{
    Todos.find()
    .then((result)=>res.json(result))
    
    .catch((err)=>res.json(err))
})

app.delete('/delete',(req,res)=>{
    const {id}=req.body
    Todos.findOneAndDelete(id)
    .then((result)=>res.json("todo deleted"))
    .catch((err)=>res.json(err))
})

app.patch('/patch',(req,res)=>{
    const {id}=req.body
    Todos.findByIdAndUpdate({_id:id},{isCompleted:!isCompleted})
    .then((result)=>res.json("todo toggle"))
    .catch((err)=>res.json(err))
})


app.listen(3000,()=>{
    console.log('app is listening at http://localhost:3000 ')
})
