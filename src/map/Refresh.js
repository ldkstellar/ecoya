import { useEffect, useState } from "react";
import { TouchableOpacity ,Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
export default({mykey,setKey})=>{
   

    const click = () =>{
        setKey(mykey+1);
    }
      
    
    
    
    return(
        <TouchableOpacity onPress={click} style={{ position:"absolute",top:600,right:10,backgroundColor:"yellow",width:30,height:30,justifyContent:"center",alignItems:"center"}}>
            <Text>R</Text>
        </TouchableOpacity>
   ) 
}