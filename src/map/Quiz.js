import { useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {TouchableOpacity} from "react-native"
import QuizIcon from "../icons/QuizIcon";

const Quiz = ()=>{
    const navigation = useNavigation();
    const [btn,setBtn] = useState(false);
    return(
        <TouchableOpacity style={{paddingRight:10}} onPress={()=>navigation.navigate('loading')}>
           <QuizIcon/>
        </TouchableOpacity>
    );
};
export default Quiz;