import { useState } from "react";

export const useMessage = ()=>{
    const [message,setMessage] = useState(()=>["start"]);
    const updateMessage = (value)=>{
        setMessage([...message],value);
    }

    return{
        message,
        updateMessage

    }

    
}