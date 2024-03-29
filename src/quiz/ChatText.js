import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Height from "../Height";

export default ({ updateMessage, postData, getMessage, message, data }) => {
  const startText = `안녕! 나는 ${data.creatureName}야.`;
  const secondText = `나에 대해 궁금한 점이 있다면 질문해줘`;

  const renderMessage = () => {
    return getMessage.map((value, index) => {
      return (
        <View key={index}>
          <View
            style={{
              marginRight: 20,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              width: message[index].length * 10 + 50,
              borderColor: "#D9D9D9",
              height: 40,
              borderWidth: 0.8,
              marginTop: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "flex-end",
              flexDirection: "row",
            }}
          >
            <Text style={{ textAlign: "center" }}>{message[index]}</Text>
          </View>

          <View style={{ marginTop: 15, marginLeft: 20, flexDirection: "row" }}>
            <Image
              source={{ uri: data.imageUrl }}
              style={{ borderRadius: 30 }}
              width={50}
              height={50}
            />
            <View
              style={{
                borderTopLeftRadius: 10,
                padding: 7,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                marginLeft: 20,
                borderWidth: 0.8,
                borderColor: "#D9D9D9",
                width: value.length * 6,
                height: 50,
              }}
            >
              <Text numberOfLines={0}>{getMessage[index]}</Text>
            </View>
          </View>
        </View>
      );
    });
  };

  const Btn = () => {
    const btn = ["서식환경", "유형", "먹이"];
    return btn.map((e, i) => {
      return (
        <TouchableOpacity
          key={i}
          onPress={() => {
            postData(e);
            updateMessage(e);
          }}
          style={{
            marginLeft: i === 0 ? 87 : undefined,
            marginRight: 4,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 4,
            width: 64,
            height: 26,
            borderRadius: 100,
            borderWidth: 0.8,
            borderColor: "#FFFFFF",
            backgroundColor: "#F2F6C4",
          }}
        >
          <Text>{e}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <Height height={15} />
      <View style={{ marginLeft: 20, flexDirection: "row" }}>
        <Image
          source={{ uri: data.imageUrl }}
          style={{ borderRadius: 30 }}
          width={50}
          height={50}
        />

        <View
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            marginLeft: 20,
            borderWidth: 0.8,
            borderColor: "#D9D9D9",
            width: startText.length * 10 + 50,
            height: 40,
            justifyContent: "center",
          }}
        >
          <Text style={{ paddingLeft: 10, textAlign: "left" }}>
            {startText}
          </Text>
        </View>
      </View>

      <View
        style={{
          borderRadius: 10,
          marginLeft: 86,
          width: secondText.length * 10 + 50,
          justifyContent: "center",
          borderColor: "#D9D9D9",
          height: 40,
          borderWidth: 0.8,
        }}
      >
        <Text style={{ paddingLeft: 10, textAlign: "left" }}>{secondText}</Text>
      </View>

      <Height height={10} />

      <View style={{ flexDirection: "row" }}>{Btn()}</View>
      {renderMessage(getMessage)}
    </ScrollView>
  );
};

