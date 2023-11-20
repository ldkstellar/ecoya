
import { useEffect,useState } from "react";
import {View} from "react-native";
import Modal  from "react-native-modal";
import MapView, { Marker } from "react-native-maps";
import axios from 'axios';
import { useMapModal } from "./use-MapModal";
import MapModal from "./MapModal";
import Refresh from "./Refresh";
import * as Location from 'expo-location';
const MyMarker = ({ item,handleMarkerPress }) => {
  return (
    <Marker
      onPress={()=>{
         handleMarkerPress(item);
        }}
      coordinate={{latitude:item.creatureLatitude,longitude:item.creatureLongitude}}
    />
  );
}

const Markers = () => {
  const {
    selectedMarkerData,
    handleMarkerPress,
    closeModal,
    isModalVisible
  } = useMapModal();

  const [animalData,setanimalData] = useState([]);
  const [region, setRegion] = useState({
    latitude: 36.47252222,
    longitude: 127.235,
    latitudeDelta: 1,
    longitudeDelta: 1});
  const [key, setKey] = useState(0);

  const [initLocation, setLocation] = useState(
    {
      latitude: 36.47252222,
      longitude: 127.235,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }
  );
  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Location permission not granted');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation({...initLocation,['latitude']:location.coords.latitude,['longitude']:location.coords.longitude});
  };
  useEffect(() => {
    getLocationAsync();
    
  }, []);
  useEffect(()=>console.log(initLocation),[initLocation]);
  
  useEffect(
    () => {
    async function fetchData() {
      try {
        const response = await axios.get('http://34.127.0.240:8080/api/creatures');
        setanimalData(response.data);
      } 
      catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  },[]);

  if (animalData.length === 0) {
    return null; 
  }

  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      initialRegion={region}
      region={region}
      key={key}>

      {
        animalData.map((value, index) =>{  
          return(
            <MyMarker key={index} item={value} handleMarkerPress={handleMarkerPress} />
          );
        })
      }
          <Refresh mykey={key} setKey={setKey}/>

      <View>
        <Modal
          animationIn={"slideInUp"}
          animationOut={"slideOutDown"}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropOpacity={0.7}
          backdropTransitionInTiming={800}
          backdropTransitionOutTiming={800}
          transparent={true}
          visible={isModalVisible}
        >
          
        <MapModal
            id={selectedMarkerData.locationId}
            closeModal={closeModal}
            />
        </Modal>
      </View>
    </MapView>
  );
}
export default Markers;
