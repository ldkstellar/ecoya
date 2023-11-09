import { TouchableOpacity ,Text } from "react-native";

export default({mykey,setKey})=>{
    const click = () =>{
        setKey(mykey+1);
    }
    
    return(
        <TouchableOpacity onPress={click} style={{ position:"absolute",top:600,right:10,backgroundColor:"red",width:30,height:30,justifyContent:"center",alignItems:"center",borderRadius:15}}>
        
        </TouchableOpacity>
   ) 
}