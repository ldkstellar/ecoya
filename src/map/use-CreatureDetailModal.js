import { useState } from "react";

export const useCreatureDetailModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMarkerData, setSelectedMarkerData] = useState([]);

  const handleMarkerPress = (data) => {
    setModalVisible(!isModalVisible);
    setSelectedMarkerData(data);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return {
    setSelectedMarkerData,
    handleMarkerPress,
    closeModal,
    isModalVisible,
    selectedMarkerData,
  };
};
