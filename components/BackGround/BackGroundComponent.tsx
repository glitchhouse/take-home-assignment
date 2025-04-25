import React from "react";
import { View, Text, Image } from "react-native";
import BackGround from "../../assets/Bg/BackGround.png";

const BackGroundComponent = () => {
  return (
    <View className="absolute">
      <Image
        source={BackGround}
        className="h-[100vh]"
        style={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          objectFit: "fill",
        }}
      />
    </View>
  );
};

export default BackGroundComponent;
