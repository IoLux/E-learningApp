import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//component
import UserProfile from "./profilecmp/UserProfile";
import About from "./profilecmp/About";
import Later from "./profilecmp/Later";

const Stack = createStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={UserProfile} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Soon" component={Later} />
    </Stack.Navigator>
  );
};

export default Profile;

const styles = StyleSheet.create({});
