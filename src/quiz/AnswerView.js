import {View,TouchableOpacity,Text} from 'react-native'
import {Height} from '../Height'
import Modal from "react-native-modal";
import CancelButton from './CancelButoon';
import CorrectCharacter from '../icons/CorrectCharacter';
import CancelModal from './CancelModal';

const AnswerView =({
    
})=>{
        if(isCorrectVisible){
            return(
                <View style={{backgroundColor:'#FFFFFF',width:"100%",height:"100%"}}>
                <CancelButton setModalVisible={setModalVisible}/>
                <View
                    style={{justifyContent:"center",alignItems:"center"}}>
                    
                    <Height height={40}/>

                    <View style={{width:280,borderColor:"#333333",borderBottomWidth:0.8}}>
                        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20,borderColor:"#333333",borderBottomWidth:0.8,paddingBottom:20}}>정답이에요!</Text>
                    </View>

                    {/* quizName */}
                    <Height height={30}/>

                    <View style={{width:280,height:154}}>
                        <Text style={{textAlign:"center",fontSize:16}}>{correct}</Text>
                    </View>
                    
                    <View style={{width:304,height:304,borderWidth:40,borderRadius:304,borderColor:"#F2F6C4"}}>
                            <CorrectCharacter/>
                    </View>
                    <Height height={32}/>

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
                    <Height height={12}/>
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
                    <CancelModal setModalVisible={setModalVisible} creatureName={creatureName} creatureId={creatureId}/>
                </Modal>

            </View>
            

            );
        };

        return(<View>

        </View>);
   
};


export default AnswerView;