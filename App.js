import { LinearGradient } from "expo-linear-gradient";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./screens/RootStackScreen";
import AuthContext from "./components/context";

export default function App() {
  return (
    <AuthContext.Provider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
