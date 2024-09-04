
import axios from "axios";

export const toggleTodolist = async(id,isCompleted)=>{
    const res = await axios.patch('http://localhost:3000/patch',{id,isCompleted})
    if(res?.data) {
       console.log('Data => ', res.data);  
       return res.data
    } else {
       return null;
    }
   }

   