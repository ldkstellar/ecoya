import { useState } from "react";

export const useMapModal = () =>{
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedMarkerData, setSelectedMarkerData] = useState([]);
    
    const handleMarkerPress = (data) => {
         setModalVisible(true)
        setSelectedMarkerData(data);
    };
     
    const closeModal = () => {
        setModalVisible(false);
    };   
   
    return{
        setSelectedMarkerData,
        handleMarkerPress,
        closeModal,
        isModalVisible,
        selectedMarkerData,
    };
}