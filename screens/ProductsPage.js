import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Category = ({ loc, page }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(page);
        }}
        style={styles.container}
      >
        <Image
          style={{
            width: "100%",
            height: 150,
            border: 2,
            alignItems: "center",
            borderRadius: 20,
          }}
          source={loc}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

function ProductsPage(props) {
  const navigation = useNavigation();

  return (
    <ScrollView>
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
          source={require("../img/cart_img.png")}
        />
      </TouchableOpacity>

      <Category loc={require("../img/category1.png")} page={"Category1"} />
      <Category loc={require("../img/category2.png")} page={"Category1"} />
      <Category loc={require("../img/category3.png")} page={"Category1"} />
      <Category loc={require("../img/category1.png")} page={"Category1"} />
      <Category loc={require("../img/category2.png")} page={"Category1"} />
      <Category loc={require("../img/category3.png")} page={"Category1"} />
      <Category loc={require("../img/category1.png")} page={"Category1"} />
      <Category loc={require("../img/category2.png")} page={"Category1"} />
      <Category loc={require("../img/category3.png")} page={"Category1"} />
      <Category loc={require("../img/category1.png")} page={"Category1"} />
      <Category loc={require("../img/category2.png")} page={"Category1"} />
      <Category loc={require("../img/category3.png")} page={"Category1"} />
      <Category loc={require("../img/category1.png")} page={"Category1"} />
      <Category loc={require("../img/category2.png")} page={"Category1"} />
      <Category loc={require("../img/category3.png")} page={"Category1"} />
      <Category loc={require("../img/category1.png")} page={"Category1"} />
      <Category loc={require("../img/category2.png")} page={"Category1"} />
      <Category loc={require("../img/category3.png")} page={"Category1"} />
      <Category loc={require("../img/category1.png")} page={"Category1"} />
      <Category loc={require("../img/category2.png")} page={"Category1"} />
      <Category loc={require("../img/category3.png")} page={"Category1"} />
      <Category loc={require("../img/category1.png")} page={"Category1"} />
      <Category loc={require("../img/category2.png")} page={"Category1"} />
      <Category loc={require("../img/category3.png")} page={"Category1"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  box: {
    backgroundColor: "rgba(228, 0, 70, 1)",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 40,
    alignItems: "center",
  },
});

export default ProductsPage;
