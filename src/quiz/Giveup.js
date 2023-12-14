import { useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {TouchableOpacity} from "react-native"
import BackBtn from "../icons/BackButton";

const Giveup = ({setModalVisible})=>{
    //const navigation = useNavigation();
    
    return(
        <TouchableOpacity style={{paddingRight:10}} onPress={()=>setModalVisible((prev)=>!prev)}>
           <BackBtn/>
        </TouchableOpacity>
    );
};
export default Giveup;