import { useState } from "react";

export const useModal = ()=>{
    const [isModalVisible,setModalVisible] = useState(false);
    const [isCorrectVisible,setisCorrectVisible] = useState(false);
    const [isWrongVisible,setWrongVisible] = useState(false);


    return{
        isModalVisible,
        setModalVisible,
        isCorrectVisible,
        setisCorrectVisible,
        isWrongVisible,
        setWrongVisible
    };
};