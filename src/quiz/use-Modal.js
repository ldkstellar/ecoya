import { useState } from "react";

export const useModal = ()=>{
    const [isModalVisible,setModalVisible] = useState(false);


    return{
        isModalVisible,
        setModalVisible

    };
};