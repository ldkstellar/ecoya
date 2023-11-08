import { useEffect, useState } from "react";
import { TouchableOpacity ,Text } from "react-native";

export default({mykey,setKey})=>{
   

    const click = () =>{
        setKey(mykey+1);
    }
      
    
    
    
    return(
        <TouchableOpacity onPress={click} style={{ position:"absolute",top:600,right:10,backgroundColor:"yellow",width:30,height:30,justifyContent:"center",alignItems:"center",zIndex:2}}>
            <Text>R</Text>
        </TouchableOpacity>
   ) 
}