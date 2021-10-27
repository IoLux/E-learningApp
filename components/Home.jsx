import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//component
import HomePages from "./Homecmp/HomePages";
import CourseAll from "./Homecmp/CourseAll";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Page" component={HomePages} options={{ headerShown: false }} />
      <Stack.Screen name="More" component={CourseAll} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
