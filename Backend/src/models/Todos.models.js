import mongoose from "mongoose";

const TodosSchema=mongoose.Schema({
    msg:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        required:true
    }
},{
    timestamps:true
})

export const Todos=mongoose.model('todos',TodosSchema)