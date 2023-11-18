import { useState } from "react";

export const useMessage = ()=>{
    const [message,setMessage] = useState([]);
    const updateMessage = (value)=>{
       let tmp = [...message];
       tmp.push(value);
       setMessage(tmp);
       
       
    }

    return{
        message,
        updateMessage,
        setMessage,

    }

    
}