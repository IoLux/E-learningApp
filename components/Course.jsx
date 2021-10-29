import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//components
import AllCourses from "./Coursecmp/AllCourses";
import DetailCourse from "./Coursecmp/DetailCourse";

const Stack = createStackNavigator();

const Course = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="test" component={AllCourses} />
      <Stack.Screen name="CourseDetail" component={DetailCourse} options={({ route }) => ({ title: route.params.title })} />
    </Stack.Navigator>
  );
};

export default Course;

const styles = StyleSheet.create({});
