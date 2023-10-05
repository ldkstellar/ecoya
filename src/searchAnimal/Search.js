import { View ,TextInput, Button, Pressable, TouchableOpacity, Modal,Text} from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Click from "./Click";
import Heihgt from "../Heihgt";

import { useSearch } from "./use-Search";
import SearchModal from "./SearchModal";

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
        <View style={{position:"absolute",justifyContent:"center",alignItems:"center",zIndex:1,alignSelf:"center"}}>
            <Heihgt height={10}/>
            <TouchableOpacity 
                style={{
                    flexDirection:"row",
                    alignItems:"center",
                    width:350,
                    borderWidth:0.3,
                    backgroundColor:"white"
                    }}
                onPress={()=>setModalbtn()}>
                <FontAwesome name="search" size={25} color="black"style={{padding:10}} />
                <Text style={{color:"lightgrey"}}>동식물 검색</Text>
              
            
            </TouchableOpacity>
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

            <Heihgt height={10}/>
            
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
            
            
           
            
            
        </View>
       
    )

}
   
