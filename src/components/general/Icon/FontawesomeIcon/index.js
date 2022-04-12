import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

const FontAwesomeIcon = ({ name, size = 30 }) => {
  return <Icon name={name} size={size}></Icon>;
};

export default FontAwesomeIcon;
