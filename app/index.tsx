import { Link, Redirect } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const index = () => {
  return <Redirect href={"/home"} />;
};

export default index;
