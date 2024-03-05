import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Chair from "./app/screens/Chair";
import AppText from "./app/components/AppText/AppText";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>Open up App.js to start working on your app!</AppText>
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
