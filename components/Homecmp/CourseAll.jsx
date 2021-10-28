import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//component
import CourseProfiler from "./components/CourseProfiler";
import Introduction from "./components/Introduction";

const Stack = createMaterialTopTabNavigator();

const CourseAll = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.Title,
    });
  });

  return (
    <Stack.Navigator>
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Profiler" component={CourseProfiler} />
    </Stack.Navigator>
  );
};

export default CourseAll;

const styles = StyleSheet.create({});
