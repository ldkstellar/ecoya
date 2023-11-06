import {SafeAreaView,View,TouchableOpacity,TextInput} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import Heihgt from '../Heihgt'

export default (
    {
    setModalbtn,
    search,
    onSubmitEditing,
    setSearch})=>{
    return(
        <SafeAreaView>
          <TouchableOpacity style={{width:"100%",height:"100%",alignItems:"center"}} onPress={setModalbtn}>
            <Heihgt height={10}/>
            <View
                style={{
                    flexDirection:"row",
                    alignItems:"center",
                    width:350,
                    borderWidth:0.3,
                    backgroundColor:"white"
                    }}
                onPress={()=>setModalbtn()}>
                <FontAwesome name="search" size={25} color="black"style={{padding:10}} />
                    <TextInput
                    style={{height:40}} 
                    placeholder='동식물 검색'
                    value={search}//완료된 결과 값
                    onChangeText={setSearch}
                    onSubmitEditing={onSubmitEditing}
                    autoFocus={true}/>    
            
            </View>
            
          </TouchableOpacity>
        </SafeAreaView>

    )
}