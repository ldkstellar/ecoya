import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import Heihgt from '../Height';
import { useNavigation } from '@react-navigation/native';

 const CancelModal =  ({setModalVisible,creatureName}) =>{
    const navigation = useNavigation();
    
    return(
        
        <View style={{borderRadius:12,alignSelf:"center",width:312,height:400,backgroundColor:"#FFFFFF",alignItems:"center"}}>
            <Heihgt height={106}/>
            <Text style={Style.cancel}>조금만 더 맞추면</Text>
            <Text style={Style.cancel}>{creatureName}와 친구가 될 수 있어요!</Text>
            <Heihgt height={70}/>
            <TouchableOpacity style={Style.btn} onPress={()=>{setModalVisible((prev)=>!prev);
               navigation.reset({ index: 0, routes: [{ name: 'home' }] });
                }}>
                <Text style={{color:"#484848",fontWeight:800,textAlign:"center",fontSize:20}}>그래도 그만할래요</Text>
            </TouchableOpacity>
        </View>

    )
}

export default CancelModal;

const Style = StyleSheet.create({
    cancel:{
        color:"#333",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
    },
    btn:{
        borderRadius:12,
        justifyContent:"center",
        width:220,
        height:60,
        backgroundColor:"#EDEDED"

    }
});