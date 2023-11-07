import {useEffect} from "react"
import {View,StyleSheet} from "react-native"
import { useNavigation ,useRoute} from "@react-navigation/native";

export default ()=>{
    const route = useRoute();
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
            title:route.params.header
        });
      }, []);

    return(

       <View>

       </View>

    )
}


const Style = StyleSheet.create({
    title:{
        flexDirection:"row",
        flex:1,
        justifyContent:"center"
    }
});