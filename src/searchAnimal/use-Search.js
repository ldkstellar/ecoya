import {useState} from "react";
// 동식물 검색 로직
export const useSearch = ()=>{
    const [search,setSearch] = useState('');
    const [fullbutton,setfullbutton] =  useState(false);
    const [modalBtn,setModal] = useState(false);
    
    const setModalbtn = ()=>{
        setModal(!modalBtn);
    }
    const btnChange =()=>{
        setfullbutton(!fullbutton);
    }
    const onSubmitEditing = ()=>{
        if (!search) {
            return;
        }
        setSearch();
        setSearch('');
    }
    return{
        search,
        setSearch,
        btnChange,
        fullbutton,
        onSubmitEditing,
        modalBtn,
        setModalbtn,
    }
}