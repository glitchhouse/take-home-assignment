import React from "react";
import { Redirect } from "expo-router";
import { View } from "react-native";

const index = () => {
  return (
    <View className="bg-primery_Black flex-1">
      <Redirect href={"/home"} />
    </View>
  );
};

export default index;
