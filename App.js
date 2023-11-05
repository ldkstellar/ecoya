import { StyleSheet,SafeAreaView,Text,View, Button} from 'react-native';
import Search from './src/searchAnimal/Search';
import Map from './src/map/Map';
import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { useHeaderHeight } from '@react-navigation/elements';
import Chat from './src/map/Chat';
const Tab = createBottomTabNavigator();
const Stack =  createStackNavigator();
const HomeComponent = ()=>{
  
  
  return(
    <View style={{flex:1 }}>
      <Search/>
      <Map/>
    </View>
   

  )
}

const MypageScreen = ()=>(<Text>Mypage</Text>);

const NotificationScreen = ()=>(
  <Text>나의 도감들입니다.</Text>
);

const Home =()=>{
  return(
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
    //tabBarActiveTintColor: "green",
    //tabBarInactiveTintColor:"black",
    tabBarShowLabel: false,
  }}>


<Tab.Screen
  name="Home"
  component={HomeComponent}
  options={{
  title: "생태지도",
  tabBarIcon: ({focused}) => {
    const myColor = focused?'green':'black';
    
    return(
      <View style={{marginLeft:55,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Icon name="map" color={myColor} size={30} />
        <Text>생태지도</Text>
      </View>
    )
  }
}}/>

<Tab.Screen
  name="Dictionalry"
  component={NotificationScreen}
  options={{
    title: "생물도감",
    tabBarIcon: ({focused}) => {
      const myColor = focused?"green":"black";

      return(
        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Icon name="notifications" color={myColor} size={30} />
          <Text>생물 도감</Text>
        </View>
    )}
    ,}}/>

  <Tab.Screen
    name="Mypage"
    component={MypageScreen} // Replace with a valid component
    options={{
      title: "마이페이지",
      tabBarIcon: ({focused}) =>{ 
        const myColor = focused?"green":'black'
        return(
          <View style={{marginRight:55,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <Icon name="person" color={myColor} size={30} />
            <Text>마이페이지</Text>
          </View>
      )}
      ,}}/> 
</Tab.Navigator> 
  )
}

export default function App() {
 
    



  return (
    <SafeAreaView style={styles.container}>
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>
          <Stack.Screen name='토끼' component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});









