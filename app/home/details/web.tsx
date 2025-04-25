import Animated from "react-native-reanimated";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import Logo from "../../../assets/Svg/Level.svg";
import React from "react";
import { TagEnum } from "..";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import ToolsComponent, {
  ListType,
} from "@/components/ToolsComponent/ToolsComponent";

const Webimage = require("../../../assets/Gif/Card1_Gif.gif");

const web = () => {
  const TexhStack: ListType[] = [
    { image: require("../../../assets/Tech_Stack_1/html.png"), name: "HTML" },
    { image: require("../../../assets/Tech_Stack_1/css.png"), name: "CSS" },
    {
      image: require("../../../assets/Tech_Stack_1/Tailwind.png"),
      name: "Tailwind",
    },
    {
      image: require("../../../assets/Tech_Stack_1/javaScript.png"),
      name: "javaScript",
    },
    {
      image: require("../../../assets/Tech_Stack_1/cursor.png"),
      name: "cursor",
    },
    {
      image: require("../../../assets/Tech_Stack_2/python.png"),
      name: "python",
    },
    {
      image: require("../../../assets/Tech_Stack_2/numpy.png"),
      name: "numpy",
    },
  ];
  return (
    <>
      <Stack.Screen
        name="Web"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <ScrollView>
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
          <SharedElement id={TagEnum.webImage.toString()}>
            <Image
              source={Webimage}
              className="h-[230] w-full"
              style={{
                objectFit: "cover",
              }}
            />
          </SharedElement>
          <View className="px-4">
            <Text className="text-[#FCF2D0] font-[450] text-[24px] leading-[30px] my-4">
              intro to coding with web dev 🌐
            </Text>
            <Text className="text-[#A3A3A3] font-[300] text-[18px] leading-[22] font-[CircularBook] mb-4">
              Start building websites with HTML & CSS, the building blocks that
              power the web. Grow into full-stack coding!
            </Text>
          </View>

          <ToolsComponent Stack={TexhStack} />
          <FooterComponent />
        </View>
      </ScrollView>
    </>
  );
};

export default web;
