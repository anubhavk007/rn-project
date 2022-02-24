import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

export default Item = ({ item, setData, data }) => {
  const { product_name, quantity, price } = item;
  const [quant, setQuantity] = useState(quantity);

  const increment = () => {
    var new_data = data.slice();
    var current_item = data[item.key];
    current_item.quantity = current_item.quantity + 1;
    new_data[item.key] = current_item;
    setData(new_data);
  };

  const decrement = () => {
    var new_data = data.slice();
    var current_item = data[item.key];
    current_item.quantity = current_item.quantity - 1;
    if (current_item.quantity < 0) {
      current_item.quantity = 0;
    }
    new_data[item.key] = current_item;
    setData(new_data);
  };
  return (
    <>
      <View style={styles.box}>
        <View style={styles.flexing}>
          <View>{/* image */}</View>
          <View>
            <Text style={{ fontWeight: "bold", marginVertical: 10 }}>
              {product_name}
            </Text>
            <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
              ₹{price}
            </Text>
          </View>
        </View>

        <View style={styles.flexing}>
          <View style={styles.box2}>
            <TouchableOpacity onPress={decrement} style={styles.buttons}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box2}>
            <Text>{item.quantity}</Text>
          </View>

          <View style={styles.box2}>
            <TouchableOpacity onPress={increment} style={styles.buttons}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 0,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  box2: {
    marginHorizontal: 0,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  flexing: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttons: {
    borderWidth: 0,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: "#d6d6d6",
    marginHorizontal: 10,
  },
});
