import React from "react"
import {View} from "react-native"
import Markers from "./Maker";
import Refresh from "./Refresh";

export default({animalData})=>{

    
      return (
        <View style={{ flex:1,borderWidth:0.3}}>

          <Markers animalData={animalData}/>
           
        </View>
      );
    }
    
   
