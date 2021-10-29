import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TestCourse = ({ route }) => {
  const value = route.params.value;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{value.body}</Text>
    </View>
  );
};

export default TestCourse;

const styles = StyleSheet.create({});
