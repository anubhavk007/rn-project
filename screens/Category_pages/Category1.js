import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BannerCategory = ({ prod }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Product1");
      }}
      style={styles.boxes_wrapper}
    >
      <Image
        style={{
          width: 160,
          height: 140,
        }}
        source={prod}
      />
      <Text style={{ fontColor: "white", fontWeight: "bold" }}>PRODUCT 1</Text>
    </TouchableOpacity>
  );
};

export default function Category1() {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CartPage");
          }}
          style={styles.box}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              alignItems: "center",
              marginHorizontal: 20,
              paddingVertical: 10,
            }}
            source={require("../../img/cart_img.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView>
        <SafeAreaView>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <BannerCategory prod={require("../../img/product1.png")} />
            <BannerCategory prod={require("../../img/product2.png")} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <BannerCategory prod={require("../../img/product3.png")} />
            <BannerCategory prod={require("../../img/product4.png")} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <BannerCategory prod={require("../../img/product5.png")} />
            <BannerCategory prod={require("../../img/product1.png")} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <BannerCategory prod={require("../../img/product2.png")} />
            <BannerCategory prod={require("../../img/product3.png")} />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  boxes_wrapper: {
    marginHorizontal: 10,
    borderRadius: 10,
    width: 175,
    height: 200,
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#ddd",
  },

  box: {
    backgroundColor: "rgba(228, 0, 70, 1)",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 40,
    alignItems: "center",
  },
});
