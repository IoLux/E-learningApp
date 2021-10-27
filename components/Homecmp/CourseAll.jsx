import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//component
import CourseProfiler from "./components/CourseProfiler";
import Introduction from "./components/Introduction";

const Stack = createMaterialTopTabNavigator();

const CourseAll = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Profiler" component={CourseProfiler} />
    </Stack.Navigator>
  );
};

export default CourseAll;

const styles = StyleSheet.create({});
