import { useEffect, useState,} from "react";
import { Text,View,Image,FlatList,ScrollView, TouchableOpacity} from "react-native";
import Heihgt from "../Heihgt";
import url from "../Url";
import axios from "axios";
import { createStackNavigator } from "@react-navigation/stack";
import Specific from "./Specific";
import {useNavigation ,useRoute} from "@react-navigation/native";
const Dic =  ()=>{
    const navigation = useNavigation();
    const route = useRoute();
    const Stack = createStackNavigator();
    const [data,setData] = useState([]);

    const renderItem = ({item,index})=>{
        return(
            <>
                <TouchableOpacity onPress={()=>navigation.navigate('Specific',{creatureName:item.creatureName,imgaeUrl:item.imageUrl})} key={item.creatureId} style={{backgroundColor:"#BDBDBD",width:109,height:109,marginBottom:14,marginRight:11}}>
                    <Image style={{width:109,height:109}} source={require('../../assets/Rabbit.jpg')}/>
                </TouchableOpacity>   
            </>
        )

    }

    const id=1

    async function detailData(detailCategoryName) {
        try{
            const getUrl = `${url}/user/${id}/Encyclopedia/${detailCategoryName}`;
        }
        catch{

        }
        
    }

    async function getData(){
        try{
            const getUrl =`${url}/user/${id}/Encyclopedia`;
            const response = await axios.get(getUrl);
            console.log(response.data);
            setData(response.data);

        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
        console.log(data);
    },[]);

    const Btn =()=>{
        const arr = ['포유류','양서류','파충류',"조류","어류"];
        return(
                arr.map((e,i)=>{
                    return(
                        <TouchableOpacity onPress={{}} key={i} style={{borderWidth:0.8,borderColor:"black",width:56,height:32,borderRadius:100,justifyContent:"center",marginRight:10}}>
                            <Text style={{textAlign:"center",fontSize:14}}>{e}</Text>
                        </TouchableOpacity>
                    );})
        );
    };

    const List = ()=>{
        
        return(
            <View style={{width:"100%",height:"100%",borderTopColor:"black",borderTopWidth:0.8,backgroundColor:"#FFF",alignItems:"center"}}>
            <Heihgt height={20}/>
            <View style={{height:40}}>
                <ScrollView style={{}} horizontal={true}>
                    <Btn/>
                </ScrollView>
            </View>
            <FlatList style={{}} numColumns={3} horizontal={false} data={data} renderItem={renderItem} keyExtractor={(item=>item.creatureId)}/>
        </View>

        )
    }


    return(
        <View style={{width:"100%",height:"100%",borderTopColor:"black",borderTopWidth:0.8,backgroundColor:"#FFF",alignItems:"center"}}>
            <Heihgt height={20}/>
            <View style={{height:40}}>
                <ScrollView style={{}} horizontal={true}>
                    <Btn/>
                </ScrollView>
            </View>
            <FlatList style={{}} numColumns={3} horizontal={false} data={data} renderItem={renderItem} keyExtractor={(item=>item.creatureId)}/>
        </View>

    );
}

export default Dic;