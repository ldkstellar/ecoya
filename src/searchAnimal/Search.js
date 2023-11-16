import {TouchableOpacity, Modal} from "react-native"
import { useSearch } from "./use-Search";
import SearchModal from "./SearchModal";
import SearchIcon from "../icons/SearchIcon";

export default()=>{
        const {
            modalBtn,
            search,
            onSubmitEditing,
            setSearch,
            setModalbtn,
            } = useSearch();
    return( 
            <TouchableOpacity 
                style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginRight:7,
                    padding:5,
                    }}
                onPress={()=>setModalbtn()}>
               <SearchIcon/>
               
               <Modal
                animationType="fade"
                transparent={false}
                visible={modalBtn}>
                    
                <SearchModal
                    setModalbtn={setModalbtn}
                    search={search}
                    onSubmitEditing={onSubmitEditing}
                    setSearch={setSearch}
                />  
                </Modal>
            </TouchableOpacity>       
    )

}
   
