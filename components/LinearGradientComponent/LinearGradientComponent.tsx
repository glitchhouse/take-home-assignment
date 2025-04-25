import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LinearGradientComponent = () => {
  return (
    <LinearGradient
      colors={["#FFFFFF00", "#000000A8"]}
      className="absolute top-0 bottom-0 left-0 right-0"
      locations={[0, 0.8]}
      style={{
        zIndex: 10,
      }}
    />
  );
};

export default LinearGradientComponent;
