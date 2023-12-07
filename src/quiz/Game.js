import {useEffect, useState} from "react";
import Modal  from "react-native-modal";
import {View,Text,StyleSheet, TouchableOpacity,StatusBar} from "react-native";
import {useNavigation,useRoute} from "@react-navigation/native";
import Heihgt from "../Heihgt";
import Giveup from "./Giveup";
import axios from "axios";
import url from "../Url";
import Cancel from "./Cancel";
import { useModal } from "./use-Modal";

const Game = ()=>{
    const {isModalVisible,
        setModalVisible
    } = useModal()
    const navigation = useNavigation();
    const route = useRoute();
    const {creatureName,creatureId} = route.params;
    const [quizContent,setQuizContent] = useState(()=>{});
    const [quizNum,setQuiznum] = useState(1);

    const userAnswer = {
        userAnswer:undefined,
        creatureId:creatureId,
        quizNumber:quizNum
    };

    const click = (creatureId,quizNum,answer)=>{
        fetchPostData(creatureId,quizNum,answer);
        setQuiznum(quizNum+1);
    }

    async function fetchGetData(id,quiznum){  
        try {
          const myUrl = `${url}/api/creatureQuiz/${id}/${quiznum}`;
          const response = await axios.get(myUrl);
          console.log(response.data);
          setQuizContent(response.data);
        }
        catch (error){
          console.error('Error:', error);
        }
    }

    const fetchPostData = (id,quiznum,answer)=>{
        try {
            const myUrl = `${url}/api/creatureQuiz/${id}/${quiznum}`;
            let tmp = {...userAnswer};
            tmp.userAnswer = answer;
            
            const response =  axios.post(myUrl,userAnswer);
            console.log(response.data);
        }
        catch (error){
            console.error('postError',error);
        }
    }

    useEffect(()=>{
        fetchGetData(creatureId,quizNum);    
    },[quizNum]);
    
    if (quizNum === 4) {
        return(
        <>
            <Text>퀴즈 끝</Text>
        </>
            
        )
        
    }

    return(
        <View style={{backgroundColor:isModalVisible?'rgba(0, 0, 0, 0.5)':'#FFFFFF',width:"100%",height:"100%"}}>
            <Giveup setModalVisible={setModalVisible}/>
            <View
                style={{justifyContent:"center",alignItems:"center"}}>
                
                <Heihgt height={80}/>
                <View
                    style={{    
                    flexDirection:"row",
                    width:350,
                    height:8,
                    borderRadius:100,
                    backgroundColor:"#F2F6C4"}}
                >
                    <View style={{
                        flex:quizNum,
                        borderRadius:100,
                        backgroundColor:"#1AAB0E",
                        height:"100%"}}
                    />

                    <View style={{flex:4,backgroundColor:"#F2F6C4",borderRadius:100,height:"100%"}}/>                
                </View>
                <Heihgt height={25}/>
                <View style={{width:280,borderColor:"#333333",borderBottomWidth:0.8}}>
                    <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20,borderColor:"#333333",borderBottomWidth:0.8,paddingBottom:20}}>다음은 올바른 대화일까요?</Text>
                </View>

                {/* quizName */}
                <Heihgt height={40}/>
                <View style={{width:280,height:154}}>
                    <Text style={{textAlign:"center",fontSize:16}}>{quizContent?.quiz}</Text>
                </View>

                <Heihgt height={202}/>

                <TouchableOpacity

                    style={{
                        display:isModalVisible,
                        borderColor:"#FFF",
                        borderWidth:1,
                        borderRadius:12,
                        width:350,
                        height:50,
                        justifyContent:"center",
                        backgroundColor:"#F2F6C4"
                    }} 
                    onPress={()=>click(creatureId,quizNum,1)
                }>
                    <Text style={{textAlign:"center"}}>올바른 말을 하고 있어요!</Text>
                </TouchableOpacity>

                <Heihgt height={12}/>
                <TouchableOpacity 
                    style={{
                        display:isModalVisible,
                        borderColor:"#FFF",
                        borderWidth:1,
                        borderRadius:12,
                        width:350,
                        height:50,
                        justifyContent:"center",
                        backgroundColor:"#F2F6C4"
                    }} 
                    onPress={()=>click(creatureId,quizNum,0)}
                >
                    <Text style={{textAlign:"center"}}>잘못된 말을 하고 있는 거 같아요</Text>
                </TouchableOpacity>
            </View>

        <Modal
         animationIn={"slideInUp"}
         animationOut={"slideOutDown"}
         animationInTiming={1000}
         animationOutTiming={1000}
         backdropOpacity={0.7}
         backdropTransitionInTiming={800}
         backdropTransitionOutTiming={800}
         transparent={true}
         visible={isModalVisible}
        >
            <Cancel setModalVisible={setModalVisible} creatureName={creatureName} creatureId={creatureId}/>
        </Modal>

        </View>
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
    },

});

export default Game;