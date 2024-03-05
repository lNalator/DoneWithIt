import { Image, Platform, StyleSheet, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

import colors from "../config/colors";

export default function Chair() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.button1}></View>
      <View style={styles.button2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: colors.black,
  },
  button1: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: Platform.OS === "android" ? Constants.statusBarHeight + 10 : 20,
    left: 30,
  },
  button2: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: Platform.OS === "android" ? Constants.statusBarHeight + 10 : 20,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    // alignSelf: "center",
  },
});
