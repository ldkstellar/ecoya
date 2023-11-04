import { useState } from "react"
// 구체적인 상세페이지
export  const useSpecificModal = () =>{
    const [specific,setSpecific]  = useState(false);
    const specificModalClose  = ()=> setSpecific(false);
    return{
        specific,
        specificModalClose,
        setSpecific
    };
}
