import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import Dashboard from "./Dashboard";
import Category1 from "./Category_pages/Category1";
import ProductsPage from "./ProductsPage";
import Product1 from "./Category_pages/Cat1/Product1";
import CartPage from "./CartPage";
import TopBanner from "./TopBanner";
//import DrawerNav from "./DrawerNav";
const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="None">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen
      options={{ headerMode: false }}
      name="SignInScreen"
      component={SignInScreen}
    />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="Dashboard" component={Dashboard} />
    <RootStack.Screen name="ProductsPage" component={ProductsPage} />
    <RootStack.Screen name="Category1" component={Category1} />
    <RootStack.Screen name="Product1" component={Product1} />
    <RootStack.Screen name="CartPage" component={CartPage} />
    <RootStack.Screen name="TopBanner" component={TopBanner} />

    {/* <RootStack.Screen name="DrawerNav" component={DrawerNav} /> */}
  </RootStack.Navigator>
);

export default RootStackScreen;
