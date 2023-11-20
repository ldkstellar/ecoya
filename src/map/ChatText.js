import {ScrollView,Text, View,Image, TouchableOpacity} from 'react-native'
import { useRef } from 'react';
import Heihgt from '../Heihgt'

export default ({message,data})=>{
    
    const startText = `안녕! 나는 ${data.creatureName}야.`;
    const secondText = `나에 대해 궁금한 점이 있다면 질문해줘`;

    const myBtn = ()=>{
        const btn = ['서식환경','유형','먹이'];
        return btn.map((e,i)=>{
            return(
                <TouchableOpacity key={i} style={{ marginLeft:i ===0 ?87:undefined,marginRight:4,justifyContent:"center",alignItems:"center",marginRight:4,width:64,height:26,borderRadius:100,borderWidth:0.8,borderColor:"#FFFFFF",backgroundColor:"#F2F6C4"}}>
                    <Text>{e}</Text>
                </TouchableOpacity>
            );

        });
    }

    return(
        <ScrollView style = {{backgroundColor:"#FFF"}}>
            <Heihgt height={15}/>   
            <View style={{marginLeft:20,flexDirection:"row"}}>
                    <Image source={{uri:data.imageUrl}}style={{borderRadius:30}} width={50} height={50}/>
                    <View style={{borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomRightRadius:10,marginLeft:20,borderWidth:0.8,borderColor:"#D9D9D9",width:startText.length *10 +50,height:40,justifyContent:"center"}}>
                        <Text style={{textAlign:"center"}}>{startText}</Text>
                    </View>
            </View>

            <View style={{borderRadius:10,marginLeft:86, width:secondText.length *10 +50,justifyContent:"center",borderColor:"#D9D9D9",height:40,borderWidth:0.8}}>
                <Text style={{textAlign:"center"}}>{secondText}</Text>
            </View>

            <Heihgt height={10}/>

            <View style={{flexDirection:"row"}}>
                {myBtn()}  
            </View>

        {/* 맵함수를 활용하여 component찍기 */}
        
        {
        message.map((value,index)=>{
            return(
                <View key={index} style={{marginRight:20,borderRadius:10, width:value.length *10 +50,borderColor:"#D9D9D9",height:40,borderWidth:0.8,marginTop:16,flexDirection:"row",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",flexDirection:"row"}}>
                    <Text  style={{textAlign:"center"}}>{value}</Text>
                </View>
            )
        })
        }

        </ScrollView>

    );

}