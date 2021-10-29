import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from "react-native";
import { Card, Button } from "react-native-elements";

const AllCourses = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllData();
    setIsLoading(false);
  }, []);

  const getAllData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    setData(data);
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          {data.map((value, index) => {
            return (
              <Card key={index}>
                <Card.Title>{value.title}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: "https://source.unsplash.com/random" }} />
                <Text style={{ marginBottom: 10 }}>{value.body}</Text>
                <Button title="View Course" onPress={() => navigation.navigate("CourseDetail", { value: value, title: value.title })} />
              </Card>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

export default AllCourses;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
