import {useState} from "react";
import {View,Text,StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Heihgt from "../Heihgt";
import Giveup from "./Giveup";

const Game = ()=>{
    const navigation = useNavigation();
    const [quizContent,setQuizContent] = useState(()=>{});
    return(
        <>
        <Giveup/>
        <View style={{justifyContent:"center",alignItems:"center"}}>
            <Heihgt height={80}/>
            <View style={{flexDirection:"row",borderWidth:0.8,width:350,height:8,backgroundColor:"#F2F6C4"}}>
                <View style={{flex:2,backgroundColor:"#1AAB0E",height:"100%"}}/>
                <View style={{flex:2,backgroundColor:"#F2F6C4",height:"100%"}}/>                
            </View>
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
                <Text style={{textAlign:"center"}}>올바른 말을 하고 있어요!</Text>
            </TouchableOpacity>

            <Heihgt height={12}/>
            <TouchableOpacity style={style.answer}>
                <Text style={{textAlign:"center"}}>잘못된 말을 하고 있는 거 같아요</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};

const style  = StyleSheet.create({
    answer:{
        borderColor:"#FFF",
        borderWidth:1,
        borderRadius:12,
        width:350,
        height:50,
        justifyContent:"center",
        backgroundColor:"#F2F6C4"
    }
});

export default Game;