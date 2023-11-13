import React from "react"
import {KeyboardAvoidingView, TextInput, TouchableOpacity, Text,View, ScrollView } from "react-native"
import Heihgt from "../Heihgt"


export default ({value,onchangetext,placeholder,onpressAdd,onSubmitEditing,onFocus})=>{//parameter가 undefined가 되는 이유는 객체만 넘겨서 그럼 객체의 item을 반환해야 한다.
    
    return(
            
           
             
            <View style={{flexDirection:"row",backgroundColor:"grey",borderTopWidth:"0.8",alignItems:"center"}}>
                <TextInput
                    style={{width:298,height:32, borderRadius:100,backgroundColor:"#EDEDED"}}
                    value={value}
                    onChangeText={onchangetext}
                    placeholder={placeholder}
                    onSubmitEditing={onSubmitEditing}
                    blurOnSubmit={false}
                    onFocus={onFocus}
               //return 누르면 작동되는것 
               />

            </View>
        // {/* <TouchableOpacity style={{padding:5}} onPress={onpressAdd}>
       
        // </TouchableOpacity>     */}
      

    )
}