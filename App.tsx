import { TamaguiProvider, createTamagui } from "@tamagui/core";
import { config } from "@tamagui/config/v3";
import React from "react";
import { MainStack } from "./src/Navigator";
import { NavigationContainer } from "@react-navigation/native";

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </TamaguiProvider>
  );
}
