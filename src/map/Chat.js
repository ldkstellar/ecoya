import React from "react"
import {View,Text,StyleSheet,SafeAreaView, TouchableOpacity} from "react-native"

export default ({title})=>{
    return(
        <SafeAreaView style={{flex:1}}>
            
                <View style={Style.title}>
                    <TouchableOpacity style={{flex:1}}>
                        
                            <Text>sss</Text>
                        
                    </TouchableOpacity>
                    <Text style={{flex:1.5}}>{title}</Text>
                </View>
            
            <View>
            </View>
        </SafeAreaView>

    )
}


const Style = StyleSheet.create({
    title:{
        flexDirection:"row",
        flex:1,
        backgroundColor:"yellow",
        justifyContent:"center"
        
        
        
        
        
    }
});