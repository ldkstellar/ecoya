import { useState,useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import {TouchableOpacity} from "react-native"
import QuizIcon from "../icons/QuizIcon";
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