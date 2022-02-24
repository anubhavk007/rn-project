import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import TopBanner from "./TopBanner";
import Item from "./Item";
import AuthContext from "../components/context";
import { getData } from "../components/local_storage";
// const dummy_data = [
//   {
//     key: 0,
//     product_name: "T Shirt",
//     quantity: 1,
//     price: 1000,
//   },
//   {
//     key: 1,
//     product_name: "Tata Salt",
//     quantity: 2,
//     price: 100,
//   },
//   {
//     key: 2,
//     product_name: "iPhone 13 Pro",
//     quantity: 1,
//     price: 100000,
//   },
// ];

const CartPage = () => {
  const [total, setTotal] = useState();
  useEffect(async () => {
    const defaultData = await getData();
    setData(defaultData);
  }, []);
  const [data, setData] = useState();

  const Placed_order = () => {
    Alert.alert("ORDER IS PLACED");
    data.length = 0;
    setTotal(0);
  };

  useEffect(() => {
    var new_total = 0;
    if (data != undefined) {
      data.forEach(
        (item) => (new_total = new_total + item.price * item.quantity)
      );
      setTotal(new_total);
    }
  }, [data]);

  const renderItem = ({ item }) => (
    <Item data={data} setData={setData} item={item} />
  );
  return data ? (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView>
        <TopBanner />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </ScrollView>

      <View style={styles.box}>
        <View style={{ display: "flex", justifyContent: "flex-start" }}>
          <Text>Total</Text>
          <Text style={styles.texting}>₹{total}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#06d6a0",
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 8,
          }}
          onPress={Placed_order}
        >
          <Text
            style={[
              styles.texting,
              { color: "#000", paddingHorizontal: 20, paddingVertical: 10 },
            ]}
          >
            PLACE ORDER
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={{ height: "100%" }}>
      <TopBanner />
      <Text>Cart is Empty</Text>
    </SafeAreaView>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 5,
    bottom: 15,
    display: "flex",
    borderRadius: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  texting: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
    alignItems: "center",
    // paddingHorizontal: 20,
    // paddingVertical: 10,
  },
});
