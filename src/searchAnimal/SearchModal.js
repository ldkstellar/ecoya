import { SafeAreaView, View, TouchableOpacity, TextInput } from "react-native";

import Height from "../Height";
import SearchIcon from "../icons/SearchIcon";
export default ({ setModalbtn, search, onSubmitEditing, setSearch }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
        onPress={setModalbtn}
      >
        <Height height={10} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 350,
            borderWidth: 0.3,
            backgroundColor: "white",
          }}
          onPress={() => setModalbtn()}
        >
          <SearchIcon />

          <TextInput
            style={{ height: 40, paddingLeft: 10 }}
            placeholder="동식물 검색"
            value={search} //완료된 결과 값
            onChangeText={setSearch}
            onSubmitEditing={onSubmitEditing}
            autoFocus={true}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
