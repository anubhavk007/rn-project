import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import CartPage from "../../CartPage";
import { useNavigation } from "@react-navigation/native";
import { getData, storeData } from "../../../components/local_storage";

export default Product1 = (props) => {
  const navigation = useNavigation();

  const addToCartFunction = async (event) => {
    // navigation.navigate("CartPage");
    try {
      const initialData = await getData();
      const current = {
        product_name: "Apple",
        price: 100,
        quatity: 1,
        key: 121,
      };
      console.log(initialData);
      const updatedData = [...getData, current];
      storeData(updatedData);
    } catch (e) {
      console.log(e);
    }
    navigation.navigate("CartPage");
  };

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
            source={require("../../../img/cart_img.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView style={{ backgroundColor: "rgba(228, 0, 70, 1)" }}>
        <SafeAreaView>
          <ScrollView horizontal style={styles.scroll_img}>
            <Image
              style={{
                height: 300,
                width: 200,
                padding: 100,
                marginHorizontal: 10,
                borderRadius: 10,
              }}
              source={require("../../../img/product1.png")}
            />
            <Image
              style={{
                height: 300,
                width: 200,
                padding: 100,
                marginHorizontal: 10,
                borderRadius: 10,
              }}
              source={require("../../../img/product1.png")}
            />
            <Image
              style={{
                height: 300,
                width: 200,
                padding: 100,
                marginHorizontal: 10,
                borderRadius: 10,
              }}
              source={require("../../../img/product1.png")}
            />
          </ScrollView>
          <Animatable.View
            style={[
              styles.footer,
              {
                backgroundColor: "white",
              },
            ]}
            animation="fadeInUpBig"
          >
            <Text style={[styles.title, { color: "black" }]}>
              MERCHANT COAT
            </Text>
            <View style={styles.details}>
              <Text>
                Merchandising includes the determination of quantities, setting
                prices for goods, creating display designs, developing marketing
                strategies, and establishing discounts or coupons. More broadly,
                merchandising may refer to retail sales itself: the provision of
                goods to end-user consumers.
              </Text>
            </View>
            <TouchableOpacity onPress={addToCartFunction}>
              <LinearGradient
                colors={["#0061ff", "#60efff"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Add to Cart</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate("CartPage")}>
            <LinearGradient
              colors={["#00ff87", "#60efff"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Add to Cart</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity> */}
          </Animatable.View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scroll_img: {
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0,
    paddingHorizontal: 0,
    marginVertical: 10,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  signIn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
  textSign: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  details: {
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "#666",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
  },

  box: {
    backgroundColor: "rgba(228, 0, 70, 1)",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 40,
    alignItems: "center",
  },
});

// </View>
//   );
// };

//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
