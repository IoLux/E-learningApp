import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Later = () => {
  return (
    <View style={styles.container}>
      <Text>SOON...</Text>
    </View>
  );
};

export default Later;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
