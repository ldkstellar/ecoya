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
import CorrectCharacter from "../icons/CorrectCharacter";
import WrongCharacter from "../icons/WrongCharacter";
import XImage from "../icons/XImage";
import FailCharacter from "../icons/FailCharacter";
const Game = ()=>{
    const {
        isModalVisible,
        setModalVisible,
        isCorrectVisible,
        setisCorrectVisible,
        isWrongVisible,
        setWrongVisible,
        isLastStatus,
        setLastStatus,
    } = useModal();

    const navigation = useNavigation();
    const route = useRoute();
    const {creatureName,creatureId} = route.params;
    const [quizContent,setQuizContent] = useState(()=>{});
    const [quizNum,setQuiznum] = useState(1);
    const [correct,setCorrect] = useState(()=>"");
    const [Answer,setAnswer] = useState(
        {
            userAnswer:0,
            creatureId:creatureId,
            quizNumber:1,
        }
    );

    const [userData,setUserData] = useState({
        userId:1,
        creatureId:creatureId,
        correctAnswer:0,
    });
  

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
            let tmp = {...Answer};
            tmp.userAnswer = answer;
            tmp.quizNumber +=1;
            setAnswer(tmp);
            axios.post(myUrl,Answer).then((response)=>{

                if (response.data.isCorrect) {
                    console.log(response.data);
                    let tmp = {...userData};
                    tmp.correctAnswer+=1;
                    setUserData(tmp);
                    setCorrect(response.data.quizSolution);
                    setisCorrectVisible(!isCorrectVisible);
                    return;
                }
                setCorrect(response.data.quizSolution);
                setWrongVisible(!isWrongVisible);
            });
          
        }
        catch (error){
            console.error('postError',error);
        }
    }

    useEffect(()=>{
        fetchGetData(creatureId,quizNum);    
    },[quizNum]);

    if (isCorrectVisible) {
        return(
            <View style={{backgroundColor:'#FFFFFF',width:"100%",height:"100%"}}>
                <Giveup setModalVisible={setModalVisible}/>
                <View
                    style={{justifyContent:"center",alignItems:"center"}}>
                    
                    <Heihgt height={40}/>

                    <View style={{width:280,borderColor:"#333333",borderBottomWidth:0.8}}>
                        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20,borderColor:"#333333",borderBottomWidth:0.8,paddingBottom:20}}>정답이에요!</Text>
                    </View>

                    {/* quizName */}
                    <Heihgt height={30}/>

                    <View style={{width:280,height:154}}>
                        <Text style={{textAlign:"center",fontSize:16}}>{correct}</Text>
                    </View>
                    
                    <View style={{width:304,height:304,borderWidth:40,borderRadius:304,borderColor:"#F2F6C4"}}>
                            <CorrectCharacter/>
                    </View>
                    <Heihgt height={32}/>

                    <TouchableOpacity
                        style={{
                            display:isModalVisible,
                            borderColor:"#FFF",
                            borderWidth:1,
                            borderRadius:12,
                            width:350,
                            height:50,
                            justifyContent:"center",
                            backgroundColor:"#EDEDED"
                        }} 
                        onPress={()=>{
                            if (quizNum===4) {
                                setQuiznum(quizNum+1);
                            }
                            setisCorrectVisible(!isCorrectVisible);
                        }}>
                        <Text style={{textAlign:"center"}}>{quizNum===4?'친구가 되었을까요?':'다음 퀴즈를 풀래요!'}</Text>
                    </TouchableOpacity>
                    <Heihgt height={12}/>
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
            

        )
    }
    else if (isWrongVisible){
        return(
            <View style={{backgroundColor:'#FFFFFF',width:"100%",height:"100%"}}>
            <Giveup setModalVisible={setModalVisible}/>
            <View
                style={{justifyContent:"center",alignItems:"center"}}>
                
                <Heihgt height={40}/>

                <View style={{width:280,borderColor:"#333333",borderBottomWidth:0.8}}>
                    <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20,borderColor:"#333333",borderBottomWidth:0.8,paddingBottom:20}}>다시 한 번 생각해볼까요?</Text>
                </View>

                {/* quizName */}
                <Heihgt height={30}/>

                <View style={{width:280,height:154}}>
                    <Text style={{textAlign:"center",fontSize:16}}>{correct}</Text>
                </View>
                
                <View style={{width:304,height:304,justifyContent:"center",alignItems:"center"}}>
                        <View style={{position:"absolute"}}>
                            <XImage/>
                        </View>
                        <WrongCharacter/>
                </View>
                <Heihgt height={32}/>

                <TouchableOpacity
                    style={{
                        display:isModalVisible,
                        borderColor:"#FFF",
                        borderWidth:1,
                        borderRadius:12,
                        width:350,
                        height:50,
                        justifyContent:"center",
                        backgroundColor:"#EDEDED"
                    }} 
                    onPress={()=>{
                        if (quizNum===4) {
                            setQuiznum(quizNum+1);
                        }
                        setWrongVisible(!isWrongVisible);
                        }}>
                    <Text style={{textAlign:"center"}}>{quizNum===4?'친구가 되었을까요?':'다음 퀴즈를 풀래요!'}</Text>
                </TouchableOpacity>
                <Heihgt height={12}/>
            
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
        


        )

    }
    

    if (quizNum === 5 && userData.correctAnswer>=3) {
        return(
        <>
            <Text>획득</Text>
        </>
            
        )
        
    }
    else if(quizNum === 5 && userData.correctAnswer<3){
        return(
            <View style={{backgroundColor:'#FFFFFF',width:"100%",height:"100%"}}>
                <Giveup setModalVisible={setModalVisible}/>   
                <Heihgt height={40}/> 
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontWeight:"bold",fontSize:20}}>'{creatureName}'와  친구가 되지 못했어요</Text>
                    <Text style={{fontWeight:"bold",fontSize:20}}>다음에 다시 만나요!</Text>
                </View>
                <Heihgt height={250}/>
                <FailCharacter/>
                <Heihgt height={54}/>
                <View style={{alignItems:"center"}}>
                <TouchableOpacity
                    style={{
                        
                        borderColor:"#FFF",
                        borderWidth:1,
                        borderRadius:12,
                        width:350,
                        height:50,
                        
                        justifyContent:"center",
                        backgroundColor:"#EDEDED"
                    }} 
                    onPress={()=>{
                        if (quizNum===4) {
                            setQuiznum(quizNum+1);
                        }
                        setWrongVisible(!isWrongVisible);
                        }}>
                    <Text style={{textAlign:"center"}}>다음에 다시 도전할래요!</Text>
                </TouchableOpacity>
                </View>
            </View>
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