import React from "react";
import ToolSvg from "../../assets/Svg/tools.svg";
import { FlatList, Image, ImageSourcePropType, Text, View } from "react-native";

const ToolImage = require("../../assets/Svg/tool.png");

export type ListType = {
  image: ImageSourcePropType;
  name: string;
};

const ToolsComponent = (props: { Stack: ListType[] }) => {
  return (
    <>
      <View className="w-full h-[1px] bg-[#ffffff23] my-3" />
      <View className="px-4">
        <View className="flex-row space-x-2 mt-4">
          <Image source={ToolImage} />
          <Text className="text-[#A3A3A3] font-[300] text-[16px] leading-[22] font-[CircularBook] mb-4">
            {"tools covered".toUpperCase()} ( {props.Stack.length} )
          </Text>
        </View>
        <FlatList
          data={props.Stack}
          horizontal
          nestedScrollEnabled={true}
          contentContainerStyle={{
            gap: 30,
            marginTop: 20,
          }}
          renderItem={({ item: { image, name }, index }) => {
            return (
              <View className="items-center justify-center space-y-4">
                <Image source={image} className="w-[50px] h-[50px]" />
                <Text className="text-[#A3A3A3] font-[300] text-[16px] leading-[22] font-[CircularBook]">
                  {name}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View className="w-full h-[1px] bg-[#ffffff23] mt-14" />
    </>
  );
};

export default ToolsComponent;
