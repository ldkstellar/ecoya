import {View,Image,Text} from'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
export default ()=>{
    
    const route = useRoute();
    const navigation =useNavigation();
    navigation.setOptions({title:route.params.creatureName});
  
    return(
        <View>
            
        </View>

    )
};
