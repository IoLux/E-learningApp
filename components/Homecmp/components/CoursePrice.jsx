import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PricingCard } from "react-native-elements";

const CoursePrice = ({ route }) => {
  const value = route.params.Value;

  const priceColour = (title) => {
    switch (title) {
      case "Free":
        return "#113CFC";
        break;
      case "Premium":
        return "#F0A500";
        break;
      default:
        return "#000000";
        break;
    }
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        {value.pricing.map((v, i) => {
          return <PricingCard key={i} color={priceColour(v.title)} title={v.title} price={"$" + v.price} info={[v.description]} button={{ title: "GET STARTED" }} />;
        })}
      </ScrollView>
    </View>
  );
};

export default CoursePrice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

{
  /* <PricingCard color="blue" title="Free" price="$0" info={["1 User", "Basic Support", "All Core Features"]} button={{ title: "GET STARTED", icon: "flight-takeoff" }} />; */
}
