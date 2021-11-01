import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Linking } from "react-native";
import { Avatar } from "react-native-elements";

const CourseProfiler = ({ route }) => {
  const Value = route.params.Value;

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <SafeAreaView style={styles.containerTop}>
        <View>
          <Avatar size="large" source={{ uri: Value.user.avatar }} rounded />
        </View>
        <Text>{Value.user.name}</Text>
        <Text>{Value.user.email}</Text>
      </SafeAreaView>
      <View style={styles.container}>
        <Text>{Value.user.bio}</Text>
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
