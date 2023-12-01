import { useState} from "react";
import { useNavigation,useRoute } from "@react-navigation/native";
import {TouchableOpacity} from "react-native"
import QuizIcon from "../icons/QuizIcon";

const Quiz = ()=>{
    const navigation = useNavigation();
    const route =  useRoute();
    
    
    
    return(
        <TouchableOpacity style={{paddingRight:10}} onPress={()=>navigation.navigate('loading',{id:route.params.header.creatureId,creature:route.params.header.creatureName})}>
           <QuizIcon/>
        </TouchableOpacity>
    );
};
export default Quiz;