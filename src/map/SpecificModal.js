import React from 'react';
import { Entypo } from '@expo/vector-icons';

import {View, Image , ScrollView,Text,TouchableOpacity} from 'react-native'
import Height from '../Heihgt'

export default ({
      category,
      creatureImage,
      creatureName,
      creatureInformation,
      specificModalClose,}) =>{
      

    
     return (
      <View style={{flexDirection:"colum"}}>
            {/* 버튼 */}
            <TouchableOpacity activeOpacity={0.8} onPress={specificModalClose} style={{marginLeft:40,padding:5}}>
                  <Entypo name="home" size={26} color="black" />
            </TouchableOpacity>

            <Height height={30}/>

            <View style={{alignItems:"center",flexDirection:"column"}}>
                  {/* 이미지 */}
                  <View style={{width:200,height:200 ,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{fontSize:25,fontWeight:"bold"}}></Text>
                        <Height height={15}/>
                        <Image source={{uri:creatureImage}} style={{width:"100%",height:"100%",borderWidth:10,borderColor:"gold"}} resizeMode={"cover"}/> 
                  </View>

                  <Height height={30}/>

                  {/* 상세내용 */}
                  <View style={{flexDirection:"column",alignItems:"center"}}>

                        <Text style={{fontSize:35}}>{creatureName}</Text>
                        <Height height={10}/>
                        <Text style={{fontSize:18}}>{category}</Text>
                        <Height height={10}/>
                        
                        <View style={{width:341,height:281}}>
                              <ScrollView>
                                    <Text style={{fontSize:15}}>{creatureInformation}</Text>
                              </ScrollView>
                        </View>
                  </View>

                  {/* 등급 */}

                  {/* <View style={{width:300 ,height:80 ,backgroundColor:"lightgrey"}}>
                        <Entypo name="flower" size={24} color="black" />
                  </View> */}

                  {/* 버튼  */}
                  <Height height={20}/>
                  <TouchableOpacity style={{width:309,height:62,justifyContent:"center",alignItems:"center", borderWidth:1,borderColor:"#AAA",backgroundColor:"lightgrey",borderRadius:20}}>
                              <Text style={{fontSize:20}}>만난 친구</Text>
                  </TouchableOpacity>
            </View>
     </View>
     );
   
}