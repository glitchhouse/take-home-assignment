import Animated, { FadingTransition } from "react-native-reanimated";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import LinearGradientComponent from "../LinearGradientComponent/LinearGradientComponent";
import Logo from "../../assets/Svg/Level.svg";
import React from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Image as NativeImage, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { CardType, TagEnum } from "@/app/home";

const CardComponent = (props: CardType) => {
  return (
    <View className="border-[#525252] border-[2px] w-[300px]">
      <View className="relative">
        <LinearGradient
          colors={["#000000A0", "#00000000"]}
          className="absolute top-0 bottom-0 right-0"
          locations={[0, 0.4]}
          start={{ x: 1, y: 0.4 }}
          style={{
            zIndex: 10,
            width: 200,
            height: 200,
          }}
        />
        <View className="absolute right-2 top-2 z-20">
          <Logo />
        </View>
        <View>
          <Image
            source={props.image}
            className="h-[230] w-full"
            style={{
              objectFit: "fill",
            }}
          />
        </View>
      </View>
      <View className="px-4 relative ">
        <LinearGradientComponent />
        <Text className="text-[#FCF2D0] font-[450] text-[24px] leading-[30px] my-4">
          {props.Text1}
        </Text>

        <Text className="text-[#A3A3A3] font-[300] text-[18px] leading-[22] font-[CircularBook] mb-4">
          {props.Text2}
        </Text>
        <ButtonComponent onPress={props?.onPress} />
      </View>
    </View>
  );
};

export default CardComponent;
