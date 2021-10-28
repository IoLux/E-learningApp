import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";

import * as data from "../json/User.json";

const HomePages = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      {data.posts.map((value, index) => {
        return (
          <Card key={index}>
            <Card.Title>{value.words}</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: value.image }} />
            <Text style={{ marginTop: 12, marginBottom: 12 }}>{value.sentences}</Text>
            <Button title="Next" onPress={() => navigation.navigate("More", { Title: value.words, Value: value })} />
          </Card>
        );
      })}
    </ScrollView>
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
