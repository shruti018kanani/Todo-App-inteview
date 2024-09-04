import axios from "axios";

export const getTODataList = async()=>{
    const res = await axios.get('http://localhost:3000/get')
    if(res?.data) {
       console.log('Data => ', res.data);  
       return res.data
    } else {
       return null;
    }
   }