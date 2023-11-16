import {ScrollView,Text,StyleSheet} from 'react-native'
export default ({message})=>{





return(
<ScrollView style = {{backgroundColor:"#FFF"}}>
{/* 맵함수를 활용하여 component찍기 */}
    {message.map((value,index)=>{
        return(
            <Text key={index}>{value}</Text>

        )
    })}

</ScrollView>

    )

}