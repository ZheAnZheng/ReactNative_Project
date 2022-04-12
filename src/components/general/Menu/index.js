import React from "react";
import { View } from "react-native";
import { Menu } from "react-native-paper";
import Icon from "../Icon/EntypoIcon";
import Style from "./index.style";

const MyComponent = () => (
  <View style={Style.Container}>
    <Menu.Item
      icon={() => <Icon name="bug" color={Style.White} size={20} />}
      onPress={() => {}}
      style={Style.Item}
      titleStyle={Style.ItemTitle}
      title="簡介"
    />
    <Menu.Item
      icon={() => <Icon name="cog" color={Style.White} size={20} />}
      onPress={() => {}}
      style={Style.Item}
      titleStyle={Style.ItemTitle}
      title="設定"
    />
  </View>
);

export default MyComponent;
