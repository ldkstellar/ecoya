import React from "react"
import {View} from "react-native"
import Markers from "./MakerList";

export default({animalData})=>{

    
      return (
        <View style={{ borderWidth:0.3}}>

         <Markers animalData={animalData}/>

        </View>
      );
    }
    
   
