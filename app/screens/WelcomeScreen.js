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

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.titleContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.firstButton}></View>
        <View style={styles.secondButton}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    flex: 1,
    justifyContent: "space-between",
  },
  titleContainer: {
    paddingTop: 20,
    alignItems: "center",
    width: "100%",
    height: 150,
  },
  logo: {
    width: 100,
    height: 100,
  },

  bottomContainer: {
    width: "100%",
    height: 150,
  },
  firstButton: {
    flex: 1,
    backgroundColor: "tomato",
  },
  secondButton: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});
