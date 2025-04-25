import BackGroundComponent from "@/components/BackGround/BackGroundComponent";
import CardComponent from "@/components/CardComponent/CardComponent";
import React from "react";
import TickSvg from "../../assets/Svg/Tick.svg";
import { useNavigation } from "@react-navigation/native";
import { Stack, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  FlatList,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  View,
} from "react-native";

export type CardType = {
  id: string;
  image?: ImageSourcePropType;
  Text1?: string;
  Text2?: string;
  tagName: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export enum TagEnum {
  "pyImage",
  "webImage",
}
const Logo = require("../../assets/Level/level.png");
const index = () => {
  const navigation = useNavigation();

  const CardData: CardType[] = [
    {
      id: "1",
      tagName: TagEnum.webImage.toString(),
      image: require("../../assets/Gif/Card1_Gif.gif"),
      Text1: "intro to coding with web dev 🌐",
      Text2:
        "Start building websites with HTML & CSS, the building blocks that power the web. Grow into full-stack coding!",
      onPress() {
        router.push({
          pathname: "/home/details/web",
          params: { routeName: "web" },
        });
      },
    },
    {
      id: "2",
      tagName: TagEnum.pyImage.toString(),
      image: require("../../assets/Gif/Card2_Gif.gif"),
      Text1: "intro to coding with ai python 🤖",
      Text2:
        "Learn Python basics and dive into AI. Build practical ai apps, get hands-on with ml models and grow into ai engineering!",
      onPress() {
        router.push({
          pathname: "/home/details/python",
          params: { routeName: "python" },
        });
      },
    },
  ];
  return (
    <SafeAreaView
      className="flex-1 bg-primery_Black relative px-4 pt-4"
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <BackGroundComponent />
        <View className="flex-row justify-between">
          <View>
            <Text className="text-[#A3A3A3] font-[NTBrickSans] font-[400] text-[22px] leading-[31px]">
              pick your track
            </Text>
            <Text className="text-[#EFD84C] font-[NTBrickSans] font-[400] text-[22px] leading-[31px]">
              time to build 🚀
            </Text>
          </View>
          <View className="">
            <Image
              source={Logo}
              style={{
                objectFit: "fill",
              }}
            />
          </View>
        </View>
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
        <View className="mt-8">
          <FlatList
            nestedScrollEnabled={true}
            horizontal
            data={CardData}
            keyExtractor={(item) => item.id}
            scrollEnabled={true}
            contentContainerStyle={{
              gap: 20,
            }}
            snapToInterval={300 + 20} //Card Width + gap
            renderItem={({ item }) => <CardComponent {...item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
