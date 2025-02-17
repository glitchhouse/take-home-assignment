import React from "react";
import RightArrow from "../../assets/Svg/RightArrow.svg";

import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export type props = {
  onPress?: (event: GestureResponderEvent) => void;
};

const ButtonComponent = (props: props) => {
  return (
    <TouchableOpacity
      style={{
        boxShadow: "#000",
        zIndex: 20,
      }}
      onPress={props.onPress}
      className="flex-row border-[#A3A3A3] border-[1px] mb-4 mx-4 items-center h-[50px] justify-center space-x-3"
    >
      <Text
        className="text-[#A3A3A3] font-[CooperHewittMedium]"
        style={{ letterSpacing: 3 }}
      >
        {"view track details".toLocaleUpperCase()}
      </Text>
      <RightArrow />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
