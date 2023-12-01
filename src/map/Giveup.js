import { useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {TouchableOpacity} from "react-native"
import BackBtn from "../icons/BackButton";

const Giveup = ()=>{
    const navigation = useNavigation();
    const [btn,setBtn] = useState(false);
    return(
        <TouchableOpacity style={{paddingRight:10}} onPress={()=>navigation.navigate('home')}>
           <BackBtn/>
        </TouchableOpacity>
    );
};
export default Giveup;