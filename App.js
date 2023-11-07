import { StyleSheet,SafeAreaView,Text,View} from 'react-native';
import Search from './src/searchAnimal/Search';
import Map from './src/map/Map';
import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './src/map/Chat';
import MapIcon from './src/icons/MapIcon';
import Book from './src/icons/BookIcon';
import Heihgt from './src/Heihgt';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Mypage from './src/icons/Mypage';
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();
const Stack =  createStackNavigator();

const MypageScreen = ()=>(<Text>Mypage</Text>);

const NotificationScreen = ()=>(
  <Text>나의 도감들입니다.</Text>
);

const Home =()=>{
  return(
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
    //tabBarActiveTintColor: "#1AAB0E",
    //tabBarInactiveTintColor:"#FFFFFF",
    tabBarShowLabel: false,
  }}>


<Tab.Screen
  name="Home"
  component={Map}
  options={{
  headerRight:()=>(
    <Search/>
  ),
  title: "생태지도",
  tabBarIcon: ({focused}) => {
    const myColor = focused?'#1AAB0E':'#333333';
    return(
      <View style={{marginLeft:65,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Heihgt height={6.44}/>
        <MapIcon color ={myColor}/>
        <Text style={{color:myColor}}>생태지도</Text>
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
      const myColor = focused?"#1AAB0E":"#333333";

      return(
        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
         <Heihgt height={6.44}/>
         <Book color ={myColor}/>
          <Text style={{color:myColor}}>생물 도감</Text>
        </View>
    )}
    ,}}/>

  <Tab.Screen
    name="Mypage"
    component={MypageScreen} // Replace with a valid component
    options={{
      title: "마이페이지",
      tabBarIcon: ({focused}) =>{ 
        const myColor = focused?"#1AAB0E":"#333333"
        return(
          <View style={{marginRight:65,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <Heihgt height={6.44}/>
            <Mypage color={myColor}/>
            <Text style={{color:myColor}}>마이페이지</Text>
          </View>
      )}
      ,}}/> 
</Tab.Navigator> 
  )
}

export default function App() {
  useEffect(()=>{
    setTimeout(()=>SplashScreen.hideAsync()
    ,3000);

  },[]);
  
 
    



  return (
    <SafeAreaView style={styles.container}>
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Home} options={{headerShown:false}} />
          <Stack.Screen name='chat' component={Chat} options={{title:"home"}}/>
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









