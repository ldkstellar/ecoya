import { useState ,useEffect} from "react";
import {TouchableOpacity,View,Text,Image, Modal, SafeAreaView} from "react-native"
import Heihgt from "../Heihgt"
import { useSpecificModal } from "./use-specific";
import SpecificModal from "./SpecificModal";

import axios from "axios";

export default ({closeModal,id})=>{
    
    const [animalData,setanimalData] = useState(null);
    //creature.imageUrl

    const { 
        specific,
        specificModalClose,
        setSpecific
    } = useSpecificModal();
    const myButton = ()=>setSpecific(!specific);
    
    useEffect(() => {
        async function fetchData() {
          try {
            const url = `http://35.212.150.212:8080/api/creatures/detail/${id}`;
            const response = await axios.get(url);
            // console.log(response.data);
            setanimalData(response.data);
            
          } catch (error) {
            console.error('Error:', error);
          }
        }
        fetchData();
      }, []);
    
      if (animalData === null) {
        return null; //데이터가 없을 때 렌더링하지 않음
      }
     
    return(
    <TouchableOpacity
        onLongPress={closeModal}
        onPress={closeModal}
        activeOpacity={0.8}
        style={{flex: 1,justifyContent: "flex-end",marginBottom:81.7}}>
        <View style={{ backgroundColor: "white",height:148,borderWidth:1,borderColor:"lightgrey",borderTopLeftRadius:12,borderTopRightRadius:12}}>
        <Heihgt height={20}/>
        <View style={{flexDirection:"row",marginLeft:21}}>
            <Image
                style={{borderWidth:0.2,borderColor:"black" ,width:108,height:108,borderRadius:12}}
                source={{uri:animalData.imageUrl}} 
            />
            <View style={{flexDirection:"column",marginLeft:16,flexShrink:1}}>
                <View style={{flexDirection:"row"}}>
                  {/* 이름 */}
                  <Text style={{fontSize:24,fontWeight:"bold"}}>{animalData.creatureName}</Text>
                  {/* 종류 */}
                  <Text style={{fontSize:12,color:"lightgray",marginLeft:10,alignSelf:"flex-end"}}>{animalData.detailCategoryName}</Text>
                </View>
                <Heihgt height={5}/>
                
                
                <Heihgt height={4}/>
                
                    <Text style={{fontSize:12}} numberOfLines={0}>도로뇽과의 동물. 몸의 길이는 15cm 정도이며,갈색 바탕의 둥근 무늬가 있다</Text>
               
            </View>
            {/* <Modal
                animationType="slide"
                transparent={false}
                visible={specific}>
                <SafeAreaView>
                   <SpecificModal
                    category= {animalData.mainCategoryName}
                    creatureImage={animalData.imageUrl}
                    creatureName={animalData.creatureName}
                    creatureInformation={animalData.creatureInformation}
                    specificModalClose={specificModalClose}
                    />
                </SafeAreaView>
            </Modal> */}
        </View>

      
        </View>
    </TouchableOpacity>

    );

}