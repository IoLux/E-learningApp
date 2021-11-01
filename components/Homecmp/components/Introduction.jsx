import React from "react";
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from "react-native";
import { Image, Input } from "react-native-elements";

const Introduction = ({ route, navigation }) => {
  const Value = route.params.Value;

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>{Value.words}</Text>
      </View>
      <View style={styles.container}>
        <Image source={{ uri: Value.image }} style={{ width: 250, height: 250 }} PlaceholderContent={<ActivityIndicator />} />
      </View>
      <View style={styles.content}>
        <Text>{Value.paragraph}</Text>
      </View>
    </ScrollView>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 12,
  },

  content: {
    flex: 1,
    margin: 20,
  },
});
