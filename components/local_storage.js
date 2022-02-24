import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@cartData", jsonValue);
  } catch (e) {
    // saving error
    consle.log(e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@cartData");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
