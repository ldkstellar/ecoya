import {useEffect, useState} from "react"
import {View,StyleSheet,Text, ScrollView,KeyboardAvoidingView, Platform} from "react-native"
import { useNavigation ,useRoute} from "@react-navigation/native";
import axios from "axios";
import AddMessageInput from "./AddMessageInput";
import Heihgt from "../Heihgt";
import ChatText from "./ChatText";
import { FlatList } from "react-native-gesture-handler";
export default ()=>{
    const route = useRoute();
    const navigation = useNavigation();
    const [message, setMessage] = useState(()=>'');
    const id = route.params.header.creatureId;

    async function fetchData() {  
        try {
          const url = `http://34.127.0.240:8080/send/${id}`;
          const response = await axios.post(url,message);
        }
        catch (error){
          console.error('Error:', error);
        }
    }
    
    
    useEffect(() => {
        navigation.setOptions({
            title:route.params.header.creatureName
        });
      }, []);

   
    return(
        // KeyboardVertical offset으로 높이를 조절한다.
       <KeyboardAvoidingView
        style={{flex:1}}
        behavior={Platform.OS ==="ios" ? "padding":"height"}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <ScrollView style = {{backgroundColor:"green"}}>
                    {/* 맵함수를 활용하여 component찍기 */}
          <Text>테스트</Text>
        </ScrollView>
        <AddMessageInput/>
          
          
       </KeyboardAvoidingView>

    )
}


const Style = StyleSheet.create({
    title:{
        flexDirection:"row",
        flex:1,
        justifyContent:"center"
    }
});