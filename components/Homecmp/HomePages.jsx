import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Button, Card } from "react-native-elements";

const HomePages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Next" onPress={() => navigation.navigate("More", { Title: "HOOOOOORAY" })} />
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
