import { useState ,useEffect} from "react";
import {TouchableOpacity,View,Text,Image,StyleSheet,} from "react-native"
import Heihgt from "../Heihgt"
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import url from "../Url";
export default ({closeModal,id})=>{
  const navigation = useNavigation();
  const [animalData,setanimalData] = useState(()=>null);
  
  async function fetchData(){  
      try {
        const myUrl = `${url}/api/creatures/detail/${id}`;
        const response = await axios.get(myUrl);
        setanimalData(response.data);
      }
      catch (error){
        console.error('Error:', error);
      }
  }

  useEffect(()=>{
    
    fetchData();
  }, []); // 처음렌더링 될때 저장

  if (animalData === null){
    return null; 
  } //데이터가 없을 때 렌더링하지 않음
    
    return(
    <TouchableOpacity
      onPress={closeModal}
      activeOpacity={0.8}
      style={style.touch}>
      <TouchableOpacity
        onPress={()=>{
          closeModal();
        }}>
            
      <View style={style.specific}>
      <Heihgt height={20}/>
      <View style={{flexDirection:"row",marginLeft:21}}>
        <Image
          style={style.specific.image}
          source={{uri:animalData.imageUrl}} 
        />
          <View style={{marginLeft:13,flexShrink:1}}>
              <View style={{flexDirection:"row",}}>
                <Text style={style.specific.text}>{animalData.creatureName}</Text>
                <Text style={style.specific.specificText}>{animalData.detailCategoryName}</Text>
                <TouchableOpacity 
                  onPress={()=>{
                      closeModal();
                      navigation.navigate('chat',{header:animalData});
                     
                    }
                  }
                  style={style.specific.chatBtn}>
                    <Text style={{fontSize:12,color:"#FFF"}}>채팅하기</Text>
                </TouchableOpacity>
              </View>
              <Heihgt height={5}/>
                <Text style={{fontSize:12,fontWeight:400,marginRight:20,color:"#D9D9D9"}} numberOfLines={0}>{animalData.creatureInformation.length>20?animalData.creatureInformation.slice(0,50):animalData.creatureInformation}</Text>
          </View>
      </View>
      </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create(

  {
    touch:{
    flex: 1,
    justifyContent: "flex-end",
    marginBottom:64,  
  },

  specific:{
    backgroundColor: "white",
    height:148,
    borderWidth:1,
    borderColor:"lightgrey",
    borderTopLeftRadius:12,
    borderTopRightRadius:12,

    image:{
      borderWidth:0.2,
      borderColor:"black",
      width:108,
      height:108,
      borderRadius:12
      },

    text:{
      fontSize:24,
      fontWeight:"bold",
      color:"#333"
    },

    specificText:{
      fontSize:12,
      color:"#666",
      marginLeft:10,
      alignSelf:"center"
    },

    chatBtn:{
      position:"absolute",
      width:66,
      height:24,
      left:0,
      right:10,
      top:80,
      backgroundColor:"#1AAB0E",
      borderRadius:100,
      borderWidth:0.8,
      borderColor:"#FFFFFF",
      justifyContent:"center",
      alignItems:"center"
    }
  }
});