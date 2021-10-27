import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

const HomePages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Next" onPress={() => navigation.navigate("More")} />
    </View>
  );
};

export default HomePages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
