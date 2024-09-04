import axios from "axios";

export const addTodolist = async(msg)=>{
    const res = await axios.post('http://localhost:3000/add',{msg:msg,isCompleted:false})
    if(res?.data) {
       console.log('Data => ', res.data);  
       return res.data
    } else {
       return null;
    }
   }

   