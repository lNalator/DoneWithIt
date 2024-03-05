import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Constants from "expo-constants";

export default function Chair() {
  return (
    <View style={styles.container}>
      <View style={styles.button1}></View>
      <View style={styles.button2}></View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  button1: {
    width: 50,
    height: 50,
    backgroundColor: "tomato",
    position: "absolute",
    top: Platform.OS === "android" ? Constants.statusBarHeight + 10 : 20,
    left: 30,
  },
  button2: {
    width: 50,
    height: 50,
    backgroundColor: "dodgerblue",
    position: "absolute",
    top: Platform.OS === "android" ? Constants.statusBarHeight + 10 : 20,
    right: 30,
  },
  image: {
    width: "50%",
    height: "50%",
    resizeMode: "cover",
  },
});
