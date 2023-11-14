import React from "react"
import { TextInput,View} from "react-native"



export default ({value,onchangetext,placeholder,onSubmitEditing,onFocus})=>{//parameter가 undefined가 되는 이유는 객체만 넘겨서 그럼 객체의 item을 반환해야 한다.
    
    return(
            
           
             
            <View style={{height:35,flexDirection:"row",backgroundColor:"grey",borderTopWidth:"0.8",justifyContents:"center",borderColor:"white"}}>
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