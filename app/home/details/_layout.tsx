import BackGroundComponent from "@/components/BackGround/BackGroundComponent";
import BackIcon from "../../../assets/Svg/Back.svg";
import React from "react";
import clsx from "clsx";
import { Slot, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  const {
    routeName,
  }: { routeName: "python" | "web" | "" } = useLocalSearchParams();
  const [activeTab, setactiveTab] = useState<"python" | "web" | "">("");
  useEffect(() => {
    setactiveTab(routeName);
  }, []);
  return (
    <SafeAreaView className="bg-primery_Black flex-1 relative pt-4">
      <TouchableOpacity
        className="flex-row items-center space-x-4 z-20 px-4"
        onPress={() => router.back()}
      >
        <BackIcon />
        <Text
          className="text-[#737373] font-[700] font-[CooperHewittMedium] leading-[20px] text-[14px] "
          style={{
            letterSpacing: 3,
          }}
        >
          BACK
        </Text>
      </TouchableOpacity>
      <BackGroundComponent />
      <View className="flex-row justify-around mt-6">
        <TouchableOpacity
          activeOpacity={0.5}
          className="flex-1 items-center justify-center h-[70px] relative"
          onPress={() => {
            setactiveTab("web");
            router.replace("/home/details/web");
          }}
        >
          <Text
            className={clsx([
              "font-[700] font-[CooperHewittMedium] leading-[20px] text-[14px] text-center w-[40%]",
              ,
              activeTab === "web" ? "text-[#07E79D]" : "text-[#737373]",
            ])}
          >
            {"intro to web dev".toUpperCase()}
          </Text>
          <View
            className={clsx([
              "absolute w-full h-[3px] z-40 bottom-0",
              activeTab === "web" ? "bg-[#07E79D]" : "bg-[#0000]",
            ])}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          className="flex-1 items-center justify-center h-[70px] relative"
          onPress={() => {
            setactiveTab("python");
            router.replace("/home/details/python");
          }}
        >
          <Text
            className={clsx([
              "font-[700] font-[CooperHewittMedium] leading-[20px] text-[14px] text-center w-[40%]",
              ,
              activeTab === "python" ? "text-[#07E79D]" : "text-[#737373]",
            ])}
          >
            {"intro to ai python".toUpperCase()}
          </Text>
          <View
            className={clsx([
              "absolute w-full h-[3px] z-40 bottom-0",
              activeTab === "python" ? "bg-[#07E79D]" : "bg-[#0000]",
            ])}
          />
        </TouchableOpacity>
      </View>
      <Slot />
    </SafeAreaView>
  );
};

export default _layout;
