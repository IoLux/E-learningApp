import React, { useLayoutEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//component
import TestCourse from "./components/TestCourse";

const Stack = createMaterialTopTabNavigator();

const DetailCourse = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  });

  return (
    <Stack.Navigator>
      <Stack.Screen name="Introduction" component={TestCourse} initialParams={{ value: route.params.value }} />
    </Stack.Navigator>
  );
};

export default DetailCourse;
