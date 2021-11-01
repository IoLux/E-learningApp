import React, { useState, useEffect, useCallback, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { Card, Button } from "react-native-elements";
import { useScrollToTop } from "@react-navigation/native";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const AllCourses = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);

  const onRefresh = useCallback(() => {
    setIsRefresh(true);
    wait(200).then(() => setIsRefreshing(false));
  });

  useScrollToTop(ref);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    setData(data);
    setIsLoading(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }} ref={ref}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ justifyContent: "center", alignItems: "center", padding: 24, marginTop: 24 }} />
      ) : (
        <ScrollView style={{ backgroundColor: "white" }} refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={onRefresh} />} ref={ref}>
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
        </ScrollView>
      )}
    </View>
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
