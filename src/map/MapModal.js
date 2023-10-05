import { useState ,useEffect} from "react";
import {TouchableOpacity,View,Text,Image, Modal, SafeAreaView} from "react-native"
import Heihgt from "../Heihgt"
import { useSpecificModal } from "./use-specific";
import SpecificModal from "./SpecificModal";
import { useMapModal } from "./use-MapModal";
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
            console.log(response.data);
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
        style={{flex: 1,justifyContent: "flex-end",}}>
        <View style={{ backgroundColor: "white", width:"100%",height:190,maxHeight:380,borderWidth:1,borderColor:"lightgrey"}}>
        <Heihgt height={50}/>
        <View style={{flexDirection:"row",marginLeft:30}}>
            <Image
                style={{width:100,height:100}}
                source={{uri:animalData.imageUrl}} 
            />
            <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",marginLeft:10,}}>
                <Text style={{fontSize:35}}>{animalData.creatureName}</Text>
                <Heihgt height={5}/>
                <Text style={{fontSize:15,color:"lightgray"}}>{animalData.detailCategoryName}</Text>
                
                <Text style={{fontSize:25}}>{animalData.creatureProtectionClass.detailCategoryId}</Text>
                <Heihgt height={4}/>
                <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}} onPress={myButton}>
                    <Text style={{fontSize:20}}>상세페이지</Text>
                </TouchableOpacity>
            </View>
            <Modal
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
            </Modal>
        </View>

      
        </View>
    </TouchableOpacity>

    )
}