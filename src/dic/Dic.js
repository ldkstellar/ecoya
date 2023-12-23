import { useEffect, useState } from "react";
import { Text,View,Image,FlatList,ScrollView, TouchableOpacity} from "react-native";
import Heihgt from "../Heihgt";
import url from "../Url";
import axios from "axios";

export default ()=>{
   
    const [data,setData] = useState([{
        userId:1,
        creatureId:1,
        creatureName:"두꺼비",
        imageUrl:require('../../assets/Rabbit.jpg'),
    },{
        userId:1,
        creatureId:2,
        creatureName:"두꺼비",
        imageUrl:require('../../assets/Rabbit.jpg'),
    }]);

    const renderItem = ({item,index})=>{
        return(
        <View style={{}}>
            <Image source={item.imageUrl}/>
            
        </View>
        )

    }

    const id=1;
    async function getData(){
        try{
            const getUrl =`${url}/${id}/Encyclopedia`;
            const response = await axios.get(getUrl);
            setData(response.data);

        }
        catch(error){
            console.log(error);
        }
    }
    // useEffect(()=>{
    //     getData();
    //     console.log(data);
    // },[]);
    const Btn =()=>{
        const arr = ['포유류','양서류','파충류',"조류","어류"];
        return(
                arr.map((e,i)=>{
                    return(
                        
                        <TouchableOpacity key={i} style={{borderWidth:0.8,borderColor:"black",width:56,height:32,borderRadius:100,justifyContent:"center",marginRight:10}}>
                            <Text style={{textAlign:"center",fontSize:14}}>{e}</Text>
                        </TouchableOpacity>
                    );})
        );
    };



    return(
        <View style={{width:"100%",height:"100%",borderTopColor:"black",borderTopWidth:0.8,backgroundColor:"#FFF",alignItems:"center"}}>
            <Heihgt height={20}/>
            <View style={{height:40}}>
                <ScrollView style={{}} horizontal={true}>
                    <Btn/>
                </ScrollView>
            </View>
            <FlatList style={{}} horizontal={true} data={data} renderItem={renderItem} keyExtractor={(item=>item.creatureId)}/>
            
        </View>
    )
}