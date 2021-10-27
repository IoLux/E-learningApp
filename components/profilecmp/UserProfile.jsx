import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import * as data from "../json/User.json";

const UserProfile = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <SafeAreaView style={styles.containerTop}>
        <View>
          <Avatar source={{ uri: data.avatar }} size="large" rounded />
        </View>
        <View style={{ marginTop: 12, marginBottom: 12 }}>
          <Text>{data.name}</Text>
          <Text>{data.emails[1].email}</Text>
        </View>
      </SafeAreaView>
      <View>
        <View style={styles.barTop}>
          <Text style={{ marginLeft: 12 }}>More</Text>
        </View>
        <View>
          <ListItem onPress={() => navigation.navigate("Soon")}>Test</ListItem>
          <ListItem onPress={() => navigation.navigate("Soon")}>Test</ListItem>
          <ListItem onPress={() => navigation.navigate("Soon")}>Test</ListItem>
        </View>
      </View>
      <View>
        <View style={styles.barTop}>
          <Text style={{ marginLeft: 12 }}>More</Text>
        </View>
        <View>
          <ListItem onPress={() => navigation.navigate("About")}>About</ListItem>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    marginTop: 20,
    marginBottom: 12,
  },

  barTop: {
    backgroundColor: "grey",
  },
});
