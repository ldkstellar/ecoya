import React from "react"
import { TextInput,View,TouchableOpacity,StyleSheet} from "react-native"
import MessageIcon from "../icons/MessageIcon"

export default ({value,onchangetext,onSubmitEditing,onFocus})=>{//parameter가 undefined가 되는 이유는 객체만 넘겨서 그럼 객체의 item을 반환해야 한다.
        return(  
            <View style={style.Frame}>
                
                <TextInput
                    style={style.input}
                    value={value}
                    onChangeText={onchangetext}
                    placeholder="메세지를 입력하세요"
                    onSubmitEditing={onSubmitEditing}
                    blurOnSubmit={false}
                    onFocus={onFocus}
                />
                <TouchableOpacity style={{backgroundColor:"#F2F6C4",marginLeft:8,width:60,height:32,borderWidth:0.8,borderColor:"#FFFF",borderRadius:100, justifyContent:"center",alignItems:"center"}}>
                    <MessageIcon/>
                </TouchableOpacity>
            </View>
    );
}

const style =  StyleSheet.create({
    Frame:{
        height:48.7,
        flexDirection:"row",
        backgroundColor:"#FFF",
        borderTopWidth:"0.8",
        justifyContents:"center",
        alignItems:"center",
        borderColor:"white",
    },

    input:{
        marginLeft:12,
        width:298,
        height:32,
        borderRadius:100,
        backgroundColor:"#EDEDED",
        paddingLeft:10
    }
    

});