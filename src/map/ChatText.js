import {ScrollView,Text, View,Image, TouchableOpacity} from 'react-native'
import Heihgt from '../Heihgt'
export default ({message,data})=>{
    return(
        <ScrollView style = {{backgroundColor:"#FFF"}}>
            <Heihgt height={10}/>   
            <View style={{height:50,paddingLeft:10,flexDirection:"row"}}>
                    <Image source={{uri:data.imageUrl}}style={{borderRadius:30}} width={50} height={50}/>
                    <Text style={{paddingLeft:30,alignSelf:"center"}}>안녕! 나는 {data.creatureName}야.</Text>
                </View>
            <Heihgt height={10}/> 
            <View>
                <Text style={{paddingLeft:86}}>나에 대해 궁금한 점이 있다면 질문해줘</Text>
            </View>
            <Heihgt height={10}/> 
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={{marginLeft:87,marginRight:4,borderColor:"#0FFFFFFF"}}>
                    <Text>서식환경</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginRight:4}}>
                    <Text>서식환경</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{}}>
                    <Text>서식환경</Text>
                </TouchableOpacity>
            </View>

    {/* 맵함수를 활용하여 component찍기 */}

        {message.map((value,index)=>{
            return(
                <View style={{height:50,paddingLeft:80,flexDirection:"row"}}>
                    <Image source={{uri:data.imageUrl}}style={{borderRadius:30}} width={50} height={50}/>
                    <Text key={index}>{value}{data.creatureName}</Text>
                </View>
        )
    })}

</ScrollView>

    )

}