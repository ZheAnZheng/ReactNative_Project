import React from "react";
import { View } from "react-native";
import GlobalStyle from "../../../styles/Global/global.style";
const Container = ({ children }) => {
  return <View style={GlobalStyle.flexCenter}>{children}</View>;
};

export default Container;
