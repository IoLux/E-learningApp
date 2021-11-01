import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const UserProfile = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://e-learningfakeapi.herokuapp.com/user");
      const data = await res.json();

      setData(data);
      setIsLoading(false);
    };

    getData();
  });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {IsLoading ? (
        <ActivityIndicator size="large" style={styles.activity} />
      ) : (
        <ScrollView style={{ backgroundColor: "white" }}>
          <SafeAreaView style={styles.containerTop}>
            <View>
              <Avatar source={{ uri: Data.avatar }} size="large" rounded />
            </View>
            <View style={{ marginTop: 12, marginBottom: 12 }}>
              <Text>{Data.name}</Text>
              <Text>{Data.emails[0].email}</Text>
            </View>
          </SafeAreaView>
          <View>
            <View style={styles.barTop}>
              <Text style={{ marginLeft: 12 }}>More</Text>
            </View>
            <View>
              <ListItem onPress={() => navigation.navigate("Soon")}>
                <Text>Test</Text>
              </ListItem>
              <ListItem onPress={() => navigation.navigate("Soon")}>
                <Text>Test</Text>
              </ListItem>
              <ListItem onPress={() => navigation.navigate("Soon")}>
                <Text>Test</Text>
              </ListItem>
            </View>
          </View>
          <View>
            <View style={styles.barTop}>
              <Text style={{ marginLeft: 12 }}>More</Text>
            </View>
            <View>
              <ListItem onPress={() => navigation.navigate("About")}>
                <Text>About</Text>
              </ListItem>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 28,
  },

  barTop: {
    backgroundColor: "grey",
  },
  activity: {
    alignItems: "center",
    justifyContent: "center",
  },
});
