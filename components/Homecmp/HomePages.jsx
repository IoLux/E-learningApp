import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from "react-native";
import { Button, Card } from "react-native-elements";

const HomePages = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://e-learningfakeapi.herokuapp.com/postUser");
      const datas = await res.json();

      setData(datas.data);
      setIsLoading(false);
    };

    getData();
  });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {isLoading ? (
        <ActivityIndicator size="large" style={{ justifyContent: "center", alignItems: "center", padding: 24 }} />
      ) : (
        <ScrollView style={{ backgroundColor: "white" }}>
          {data.map((value, index) => {
            return (
              <Card key={index}>
                <Card.Title>{value.words}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: value.image }} />
                <Text style={{ marginTop: 12, marginBottom: 12 }}>{value.sentences}</Text>
                <Button title="View Course" onPress={() => navigation.navigate("More", { Title: value.words, Value: value })} />
              </Card>
            );
          })}
        </ScrollView>
      )}
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
