import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

//component
import Home from "./components/Home";
import Profile from "./components/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} /> }} />
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarIcon: ({ color }) => <FontAwesome name="user-circle" size={24} color={color} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
