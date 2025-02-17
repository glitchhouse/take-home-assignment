import React from "react";
import TickSvg from "../../assets/Svg/Tick.svg";
import { Text, View } from "react-native";

const FooterComponent = () => {
  return (
    <View className="px-4 mt-6 mb-10">
      <Text className="text-[#A3A3A3] font-[300] text-[24px] leading-[30px] font-[CircularBook]">
        let’s choose your starting point for this track ⛳{" "}
      </Text>
      <View className="mt-8 flex-row items-center space-x-2">
        <TickSvg />
        <Text className="text-[#AAAAAA] text-[16px] font-[400]">
          Switch or add tracks anytime as you grow
        </Text>
      </View>
      <View className="mt-5 flex-row items-center space-x-2">
        <TickSvg />
        <Text className="text-[#AAAAAA] text-[16px] font-[400]">
          Complete your track to unlock new skills and projects!
        </Text>
      </View>
    </View>
  );
};

export default FooterComponent;
