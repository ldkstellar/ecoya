import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import BackBtn from "../icons/BackButton";

const CancelButton = ({ setModalVisible }) => {
  return (
    <TouchableOpacity
      style={{ paddingRight: 10 }}
      onPress={() => setModalVisible((prev) => !prev)}
    >
      <BackBtn />
    </TouchableOpacity>
  );
};
export default CancelButton;
