import axios from "axios";

export const deleteTodolist = async({id})=>{
    const res = await axios.delete('http://localhost:3000/delete',{id})
    if(res?.data) {
       console.log('Data => ', res.data);  
       return res.data
    } else {
       return null;
    }
   }
