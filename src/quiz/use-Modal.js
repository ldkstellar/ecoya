import { useState } from "react";

export const useModal = ()=>{
    const [isModalVisible,setModalVisible] = useState(false);
    const [isAnswerVisible,setisAnswerVisible] = useState(false);



    return{
        isModalVisible,
        setModalVisible,
        isAnswerVisible,
        setisAnswerVisible
    };
};