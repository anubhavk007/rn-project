import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import TopBanner from "./TopBanner";
import ProductsPage from "./ProductsPage";

export default function Dashboard() {
  return (
    <SafeAreaView>
      <ProductsPage />
    </SafeAreaView>
  );
}
