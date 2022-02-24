import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function TopBanner() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Dashboard");
        }}
        style={styles.box}
      >
        <Image
          style={{
            width: 20,
            height: 20,
            alignItems: "center",
          }}
          source={require("../img/arrow_white.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "rgba(228, 0, 70, 1)",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 40,
    alignItems: "center",
  },
});
