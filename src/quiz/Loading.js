import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, ImageBackground } from "react-native";
import Heihgt from "../Height";
const Loading = () => {
  const route = useRoute();
  const { creature, id } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("quiz", { creatureName: creature, creatureId: id });
    }, 1000);
  }, []);

  return (
    <ImageBackground
      resizeMode="cover"
      style={{ flex: 1 }}
      source={require(`../../assets/gameLoad.png`)}
    >
      <Heihgt height={160} />
      <Text
        style={{
          marginLeft: 20,
          width: 390,
          fontSize: 28,
          fontWeight: "bold",
          color: "#F2F6C4",
        }}
        numberOfLines={0}
      >
        {creature}와 대화하며
      </Text>
    </ImageBackground>
  );
};
export default Loading;
