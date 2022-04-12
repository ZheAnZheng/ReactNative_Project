import React from "react";
import Icon from "react-native-vector-icons/Entypo";
Icon.loadFont();

const EntypoIcon = ({ name, size = 30, color = {} }) => {
  return <Icon name={name} size={size} color={color} />;
};

export default EntypoIcon;
