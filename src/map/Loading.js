import { View,ImageBackground } from "react-native/types";

const Loading =()=>{
    return(
        <ImageBackground 
            resizeMode="cover"
            style={{flex:1}}
            source={require(`../../assets/gameLoad.png`)}>
                <Text style={{fontSize:40}} numberOfLines={1}>맷토끼와 대화하며</Text>
        </ImageBackground>

    );

}
export default Loading;