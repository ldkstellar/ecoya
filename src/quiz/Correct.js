import {View} from 'react-native';

export default () =>{
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
                </View>
                </View>


    );
}