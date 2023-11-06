import { View ,TextInput, Button, Pressable, TouchableOpacity, Modal,Text} from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { useSearch } from "./use-Search";
import SearchModal from "./SearchModal";
import SearchIcon from "../icons/SearchIcon";

export default()=>{
        const {
            modalBtn,
            search,
            btnChange,
            fullbutton,
            onSubmitEditing,
            setSearch,
            setModalbtn,
            } = useSearch();
    const borderWidth = 0.3
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

            /* <Heihgt height={10}/>
            
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity
                    style={{paddingHorizontal:10}} 
                    onPress={()=>btnChange(fullbutton)}>
                    <AntDesign name={fullbutton?"down":"up"} size={24} color="black" />
                </TouchableOpacity>
           
                <View style={{
                    flexDirection:"row",
                    opacity:fullbutton? undefined:0}}>
                    <Click title={"물고기"} borderWidth={borderWidth} color="white"/>
                    <Click title={"계절"}borderWidth={borderWidth}/>
                    <Click title={"동물"}borderWidth={borderWidth}/>
                    <Click title={"식물"}borderWidth={borderWidth}/>
                    <Click title={"곤충"} borderWidth={borderWidth}/>
                </View>
            </View>
             */
            
           
            
            
        
       
    )

}
   
