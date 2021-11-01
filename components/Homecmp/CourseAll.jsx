import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//component
import CourseProfiler from "./components/CourseProfiler";
import Introduction from "./components/Introduction";
import CoursePrice from "./components/CoursePrice";

const Stack = createMaterialTopTabNavigator();

const CourseAll = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.Title,
    });
  });

  const Value = route.params.Value;

  return (
    <Stack.Navigator>
      <Stack.Screen name="Introduction" component={Introduction} initialParams={{ Title: route.params.Title, Value: Value }} />
      <Stack.Screen name="Pricing" component={CoursePrice} initialParams={{ Value: Value }} />
      <Stack.Screen name="Profiler" component={CourseProfiler} initialParams={{ Value: Value }} />
    </Stack.Navigator>
  );
};

export default CourseAll;

const styles = StyleSheet.create({});
