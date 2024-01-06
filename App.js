import { StyleSheet,SafeAreaView,Text,View} from 'react-native';
import Search from './src/searchAnimal/Search';
import Map from './src/map/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './src/quiz/Chat';
import MapIcon from './src/icons/MapIcon';
import Book from './src/icons/BookIcon';
import Height from './src/Height';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import MypageIcon from './src/icons/MypageIcon';
import GreenBookIcon from './src/icons/GreenBookIcon';
import GreenMypageIcon from './src/icons/GreenMyPageIcon';
import GreenMapIcon from './src/icons/GreenMapIcon';
import Loading from './src/quiz/Loading';
import Dic from './src/dic/Dic';
import QuizButton from './src/quiz/QuizButton';
import Quiz from './src/quiz/Quiz';


SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();
const Stack =  createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const MypageScreen = ()=>(<Text>Mypage</Text>);


const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Home =()=>{
  return(
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarShowLabel: false,}}
    >

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
        <Height height={6.44}/>
        {focused?<GreenMapIcon/>:<MapIcon/>}
        <Text style={{color:myColor}}>생태지도</Text>
      </View>
    )
  }
}}
/>

<Tab.Screen
  name="Dictionalry"
  component={Dic}
  options={{
    title: "생물도감",
    headerRight:()=><Search/>,
    tabBarIcon: ({focused}) => {
      const myColor = focused?"#1AAB0E":"#333333";

      return(
        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Height height={6.44}/>
          {focused?<GreenBookIcon/>:<Book/>}
          <Text style={{color:myColor}}>생물 도감</Text>
        </View>)
    },
  }}
/>

  <Tab.Screen
    name="Mypage"
    component={MypageScreen} // Replace with a valid component
    options={{
      title: "마이페이지",
      tabBarIcon: ({focused}) =>{ 
      const myColor = focused?"#1AAB0E":"#333333";

      return(
          <View style={{marginRight:65,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <Height height={6.44}/>
            {focused?<GreenMypageIcon/>:<MypageIcon/>}
            <Text style={{color:myColor}}>마이페이지</Text>
          </View>
      )}
      ,}}/> 
</Tab.Navigator> 
  )
}

export default function App() {
  useEffect(()=>{
    setTimeout(()=>{
      return SplashScreen.hideAsync();}
    ,1000);
  },[]);
  
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>
          <Stack.Screen name='chat' component={Chat} options={{headerBackTitle:"뒤로가기",headerRight:()=>(<QuizButton/>)}}/>
          <Stack.Screen name='loading' component={Loading} options={{
            headerShown:false,
            transitionSpec: {
              open:config,
              close:config,
            }}}/>
          <Stack.Screen name='quiz' component={Quiz} options={{headerShown:false,
            title:"",
            cardStyle:{
              backgroundColor:"#FFF"
            },
            cardStyleInterpolator:forFade
          }}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
  },
});









