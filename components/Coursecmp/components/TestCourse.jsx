import React from "react";
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";

const TestCourse = ({ route }) => {
  const value = route.params.value;

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>{value.title}</Text>
        <Image source={{ uri: "https://source.unsplash.com/random" }} style={{ width: 200, height: 200, margin: 12 }} PlaceholderContent={<ActivityIndicator />} />
        <Text>{value.body}</Text>
      </View>
    </ScrollView>
  );
};

export default TestCourse;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", margin: 12, backgroundColor: "white" },
});
