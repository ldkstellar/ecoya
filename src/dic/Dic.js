import { useEffect, useState,} from "react";
import { Text,View,Image,FlatList,ScrollView, TouchableOpacity} from "react-native";
import Height from "../Height";
import url from "../Url";
import axios from "axios";
import { createStackNavigator } from "@react-navigation/stack";
import {useNavigation ,useRoute} from "@react-navigation/native";

const Specific =  ()=>{
    const route = useRoute();
    const navigation =useNavigation();
    const {creatureName,creatureId} = route.params;
    const [animalData,setanimalData] = useState(()=>null);
    console.log(creatureId);
    
    async function fetchDetailData(){  
        try {
            console.log(creatureId);
          const myUrl = `${url}/api/creatures/detail/${creatureId}`;
          const response = await axios.get(myUrl);
          console.log(response.data);
          setanimalData(response.data);
        }
        catch (error){
          console.error('Error:', error);
        }
    }

    useEffect(() => {
        navigation.setOptions({ title: creatureName });
        fetchDetailData();
      }, []);

      if (animalData === null) {
        return undefined;
      } 
  
    return(
        <View style={{flex:1,backgroundColor:"#FFF"}}>
            <Height height={70}/>
            <View style={{width:349,height:312.57,borderRadius:12,alignSelf:"center"}}>
                <Image style={{width:"100%",height:"100%"}} resizeMode="cover" source={require('../../assets/Rabbit.jpg')}/>
            </View>

            <Height height={48.16}/>

            <View style={{flexDirection:"row",marginLeft:21.11}}>
                <Text style={{fontWeight:"bold",color:"#666"}}>{animalData.detailCategoryName}</Text>
            </View>
        </View>

    )
};


const Dic =  ()=>{
    const navigation = useNavigation();
    const Stack = createStackNavigator();
    const [data,setData] = useState([]);

    async function getData(){
        try{
            const getUrl =`${url}/user/1/Encyclopedia`;
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
        return navigation.setOptions({headerShown: false});
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
        const navigation = useNavigation();
        const renderItem = ({item,index})=>{
            return(
                <>
                    <TouchableOpacity onPress={()=>navigation.navigate('specific',{creatureName:item.creatureName,creatureId:item.creatureId})} key={item.creatureId} style={{backgroundColor:"#BDBDBD",width:109,height:109,marginBottom:14,marginRight:11}}>
                        <Image style={{width:109,height:109}} source={require('../../assets/Rabbit.jpg')}/>
                    </TouchableOpacity>   
                </>
            );
        
        }
        
        return(
            <View style={{width:"100%",height:"100%",borderTopColor:"black",borderTopWidth:0.8,backgroundColor:"#FFF",alignItems:"center"}}>
            <Height height={20}/>
            <View style={{height:40}}>
                <ScrollView style={{}} horizontal={true}>
                    <Btn/>
                </ScrollView>
            </View>
            <FlatList style={{}} numColumns={3} horizontal={false} data={data} renderItem={renderItem} keyExtractor={(item=>item.creatureId)}/>
        </View>
    
        )
    };



    
 




    return(
      

    <Stack.Navigator initialRouteName="list">
        <Stack.Screen name="list" component={List} options={{headerTitle:"생물도감"}}/>
        <Stack.Screen name="specific" component={Specific} options={()=>{
            
        }}/>
    </Stack.Navigator>
       
       
    );
}

export default Dic;