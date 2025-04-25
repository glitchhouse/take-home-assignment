import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    CircularBook: require("../assets/fonts/CircularStd-Book.otf"),
    CircularLight: require("../assets/fonts/CircularStd-Light.otf"),
    CooperHewittMedium: require("../assets/fonts/CooperHewitt-Medium.otf"),
    NTBrickSans: require("../assets/fonts/NTBrickSans.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{
          animation: "slide_from_right",
          headerShown: false,
          contentStyle: { backgroundColor: "#000" },
          animationDuration: 300,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="Detail" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
