import { useState } from "react";

export const useMessage = ()=>{
    const [message,setMessage] = useState([]);
    const [getMessage,setGetmessage] = useState([]);
    const updateMessage = (value)=>{
       let tmp = [...message];
       tmp.push(value);
       setMessage(tmp);
       
       
    }
    const updateGetMessage = (value)=>{

        let temp = [...getMessage];
        temp.push(value.slice(0,30));
        setGetmessage(temp);
    }

    return{
        message,
        updateMessage,
        setMessage,
        getMessage,
        updateGetMessage,

    }

    
}