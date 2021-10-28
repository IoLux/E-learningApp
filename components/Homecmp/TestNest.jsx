import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import CourseAll from "./CourseAll";

const Stack = createStackNavigator();

const TestNest = ({ route }) => {
  const { Title } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen name="More" component={CourseAll} options={{ headerTitle: Title }} />
    </Stack.Navigator>
  );
};

export default TestNest;

const styles = StyleSheet.create({});
