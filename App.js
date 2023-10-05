import { StyleSheet,SafeAreaView,Text,View, Button} from 'react-native';
import Search from './src/searchAnimal/Search';
import Map from './src/map/Map';
import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useMapModal } from './src/map/use-MapModal';

const Tab = createBottomTabNavigator();

export default function App() {
  const iconColor = 'black';
  const iconSize =30;

  const HomeScreen = ()=>{
    
    return(
      <View>
        <Search/>
        <Map/>
    
      </View>
    );
  }

  // test
  const MypageScreen = ()=>(<Text>Mypage</Text>)
  const NotificationScreen = ()=>(
    <Text>나의 도감들입니다.</Text>
  );


  return (
    <SafeAreaView style={styles.container}>
      <View st></View>
      <NavigationContainer>
        <Tab.Navigator
          
            initialRouteName="Home"
            
            screenOptions={{
            
            //tabBarActiveTintColor: "green",
            //tabBarInactiveTintColor:"black",
            tabBarShowLabel: false,
          }}>

        <Tab.Screen
          name="Home"
          
          component={HomeScreen}
          options={{
          title: "생태지도",
          tabBarIcon: ({focused}) => {
             const myColor = focused?'green':'black';
            
            return(
              <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <Icon name="map" color={myColor} size={iconSize} />
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
                  <Icon name="notifications" color={myColor} size={iconSize} />
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
                  <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <Icon name="person" color={myColor} size={iconSize} />
                    <Text>마이페이지</Text>
                  </View>
              )}
              ,}}/> 
        </Tab.Navigator> 
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









