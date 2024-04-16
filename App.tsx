import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MainStack } from "./src/Navigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
