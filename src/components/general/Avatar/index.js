import React from "react";
import { Image } from "react-native";
import Style from "./index.style";

const Avatar = ({ src, diameter = 50 }) => {
  return (
    <Image
      source={src}
      style={[Style.Avatar, { width: diameter, height: diameter }]}
    ></Image>
  );
};

export default Avatar;
