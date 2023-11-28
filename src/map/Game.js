import {useState,useEffect} from "react";
import {SafeAreaView,View,Text,StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Heihgt from "../Heihgt";

const Game = ()=>{
    useEffect(()=>{},[]);

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
            <View style={{width:280,height:15}}>
                <Text style={{textAlign:"center"}}>text</Text>
            </View>
        </View>
    );
};


export default Game;