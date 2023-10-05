import {Text, TouchableOpacity} from "react-native";
import React from "react";

export default({title,borderWidth})=>{


    return(
      
          <TouchableOpacity style={{
            backgroundColor:"white",
            borderWidth:borderWidth,
            borderRadius:100,
            paddingHorizontal:2,
            marginHorizontal:3,
            width:55,
            height:30,
            justifyContent:"center",
            alignItems:"center",
            }}>
            <Text style={{fontSize:15}}>{title}</Text>
          </TouchableOpacity>
    )
  
}