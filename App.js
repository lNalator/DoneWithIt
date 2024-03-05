import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Chair from "./app/screens/Chair";

export default function App() {
  return (
    <>
      <Chair />
      <StatusBar style="auto" />
    </>
  );
}
