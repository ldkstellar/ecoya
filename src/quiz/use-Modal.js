import { useState } from "react";

export const useQuizModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCorrectVisible, setisCorrectVisible] = useState(false);
  const [isWrongVisible, setWrongVisible] = useState(false);
  const [isLastStatus, setLastStatus] = useState(false);

  return {
    isModalVisible,
    setModalVisible,
    isCorrectVisible,
    setisCorrectVisible,
    isWrongVisible,
    setWrongVisible,
    isLastStatus,
    setLastStatus,
  };
};
