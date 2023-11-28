import {useState,useEffect} from "react";
import {View,Text,StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Heihgt from "../Heihgt";

const Game = ()=>{
    const [quizContent,setQuizContent] = useState(()=>{});
    useEffect(()=>{
        
    },[quizContent]);

    return(
        <View style={{justifyContent:"center",alignItems:"center"}}>
            <Heihgt height={80}/>
            <View style={{borderWidth:0.8,width:350,height:8,}}></View>
            <Heihgt height={25}/>
            <View style={{width:280,borderColor:"#333333",borderBottomWidth:0.8}}>
                <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20,borderColor:"#333333",borderBottomWidth:0.8,paddingBottom:20}}>다음은 올바른 대화일까요?</Text>
            </View>
            {/* quizName */}
            <Heihgt height={40}/>
            <View style={{width:280,height:154}}>
                <Text style={{textAlign:"center",fontSize:16}}>나는 초식동물이야</Text>
            </View>
            <Heihgt height={202}/>
            <TouchableOpacity style={style.answer}>
                <Text style={{textAlign:"center"}}>맞습니다. 맞고요</Text>
            </TouchableOpacity>
            <Heihgt height={12}/>
            <TouchableOpacity style={style.answer}>
                <Text style={{textAlign:"center"}}>맞습니다. 맞고요</Text>
            </TouchableOpacity>
            
        </View>
    );
};

const style  =  StyleSheet.create({
answer:{
    borderColor:"green",
    borderWidth:1,
    borderRadius:12,
    width:350,
    height:50,
    justifyContent:"center"
    
}

});
export default Game;