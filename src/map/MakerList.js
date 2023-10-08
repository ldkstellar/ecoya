
import { useEffect,useState } from "react";
import { Modal, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from 'axios';
import { useMapModal } from "./use-MapModal";
import MapModal from "./MapModal";
const MyMarker = ({ item,handleMarkerPress }) => {
  
  return (
    <Marker
     
      onPress={()=>{
        
        
         handleMarkerPress(item);
        }}
      coordinate={{ latitude: item.creatureLatitude, longitude: item.creatureLongitude}}
    />
  );
}

const Markers = () => {
  
  const {
    selectedMarkerData,
    setSelectedMarkerData,
    handleMarkerPress,
    closeModal,
    isModalVisible
  } = useMapModal();
    const [animalData,setanimalData] = useState([]);
    
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://35.212.150.212:8080/api/creatures');
        setanimalData(response.data);
        
        
        
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  if (animalData.length === 0) {
    
    return null; // 데이터가 없을 때 렌더링하지 않음
  }

  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      initialRegion={{
        latitude: 36.47252222,
        longitude: 127.235,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}>

      {animalData.map((value, index) =>{
         
        return(
        <MyMarker key={index} item={value} handleMarkerPress={handleMarkerPress} />
      )})}
      <View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}>
          <MapModal
            
            id={selectedMarkerData.locationId}
            closeModal={closeModal}/>
        </Modal>
      </View>
    </MapView>
  );
}

export default Markers;
