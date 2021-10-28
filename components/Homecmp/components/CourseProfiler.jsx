import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Linking } from "react-native";
import { Avatar } from "react-native-elements";
import * as data from "../../json/User.json";

const CourseProfiler = () => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <SafeAreaView style={styles.containerTop}>
        <View>
          <Avatar size="large" source={{ uri: data.avatar }} rounded />
        </View>
        <Text>{data.name}</Text>
        <Text onPress={() => Linking.openURL(data.website)}>{data.website}</Text>
      </SafeAreaView>
      <View style={styles.container}>
        <Text>{data.bio}</Text>
      </View>
    </ScrollView>
  );
};

export default CourseProfiler;

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 12,
  },

  container: {
    flex: 1,
    marginTop: 18,
    marginLeft: 12,
  },
});
