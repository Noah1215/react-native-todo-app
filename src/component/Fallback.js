import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../assets/to-do-list.png")}
        style={{ height: 300, width: 300 }}
      />
      <Text style={{ color: "#445E93", fontSize: 24, fontWeight: 600 }}>
        Start Adding Your Task!
      </Text>
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({});
