import {useEffect, useState} from "react"
import {StyleSheet,KeyboardAvoidingView, TouchableOpacity,TextInput,View,Platform} from "react-native"
import {useNavigation ,useRoute} from "@react-navigation/native";
import axios from "axios";
import MessageIcon from "../icons/MessageIcon"
import ChatText from "./ChatText";
import { useMessage } from "./use-Message";

export default ()=>{
    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params.header.creatureId;
    const {
        message,
        updateMessage,
        getMessage,
        updateGetMessage,
    } = useMessage();
    const [tmpMessage,setTempMessage] = useState('');
  
    async function postData(message){  
        try {
          const url = `http://34.127.0.240:8080/send/${id}`;
      
          
          const response = await axios.post(url,{content:message});
          return response;
        }
      
        catch (error){
          console.error('Error:', error);
        }
    };
    async function getData(){  
        try {
          const url = `http://34.127.0.240:8080/getLastResponse`;
          const response = await axios.get(url);
          updateGetMessage(response.data);
        }
        catch (error){
          console.error('Error:', error);
        }
    };

    
    useEffect(()=>{
        navigation.setOptions({
            title:route.params.header.creatureName
        });
    },[]);
   
    return(
    
        // KeyboardVertical offset으로 높이를 조절한다.
       <KeyboardAvoidingView
        style={{flex:1}}
        behavior={Platform.OS ==="ios" ? "padding":"height"}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <ChatText message={message} getMessage={getMessage} data={route.params.header}/>
        <View style={style.Frame}>
                <TextInput
                    style={style.input}
                    value={tmpMessage}
                    onChangeText={setTempMessage}
                    placeholder="메세지를 입력하세요"
                    onSubmitEditing={()=>{}}
                    blurOnSubmit={false}
                    
                />
                <TouchableOpacity onPress={()=>{
                    postData(tmpMessage).then(getData());
                    updateMessage(tmpMessage);
                    setTempMessage('');
                    
                    }} style={style.btn}>
                    <MessageIcon/>
                </TouchableOpacity>
            </View>
           
       </KeyboardAvoidingView>

    )
}


const style = StyleSheet.create({
    title:{
        flexDirection:"row",
        flex:1,
        justifyContent:"center"
    }
    ,
      Frame:{
          height:48.7,
          flexDirection:"row",
          backgroundColor:"#FFF",
          borderTopWidth:"0.8",
          justifyContents:"center",
          alignItems:"center",
          borderColor:"#666666",
      },
  
      input:{
          marginLeft:12,
          width:298,
          height:32,
          borderRadius:100,
          backgroundColor:"#EDEDED",
          paddingLeft:10
      },
      btn:{
        backgroundColor:"#F2F6C4",
        marginLeft:8,
        width:60,
        height:32,
        borderWidth:0.8,
        borderColor:"#FFFF",
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center"

      }
      
  
  });
