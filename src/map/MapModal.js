import { useState ,useEffect} from "react";
import {TouchableOpacity,View,Text,Image,StyleSheet,Modal} from "react-native"
import Heihgt from "../Heihgt"
import axios from "axios";
import { useNavigation } from "@react-navigation/native";







export default ({closeModal,id})=>{
  const navigation =useNavigation();
  const [animalData,setanimalData] = useState(()=>null);
  async function fetchData() {  
      try {
        const url = `http://34.127.0.240:8080/api/creatures/detail/${id}`;
        const response = await axios.get(url);
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
          navigation.navigate('토끼');
          }}>
      <View style={style.specific}>
      <Heihgt height={20}/>
      <View style={{flexDirection:"row",marginLeft:21}}>
        <Image
          style={style.specific.image}
          source={{uri:animalData.imageUrl}} 
        />
          <View style={{marginLeft:16,flexShrink:1}}>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:24,fontWeight:"bold"}}>{animalData.creatureName}</Text>
                <Text style={{fontSize:12,color:"lightgray",marginLeft:10,alignSelf:"flex-end"}}>{animalData.detailCategoryName}</Text>
              </View>
              <Heihgt height={5}/>
              <Heihgt height={4}/>
                <Text style={{fontSize:12}} numberOfLines={0}>도로뇽과의 동물. 몸의 길이는 15cm 정도이며,갈색 바탕의 둥근 무늬가 있다</Text>
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
    marginBottom:81.7,  
  },

  specific:{
    backgroundColor: "white",
    height:148,
    borderWidth:1,
    borderColor:"lightgrey",
    borderTopLeftRadius:12,
    borderTopRightRadius:12
    ,
    image:{
      borderWidth:0.2,
      borderColor:"black",
      width:108,
      height:108,
      borderRadius:12
      },
    text:{  
    }
  }

});