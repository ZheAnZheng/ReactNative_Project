import React, { useLayoutEffect, useState } from "react";
import { Pressable } from "react-native";
import Icon from "../components/general/Icon/EntypoIcon";

const useHeaderRight = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={onPress}
          style={({ pressed }) => {
            return {
              backgroundColor: pressed === true ? "blur" : "transparent",
              marginRight: 10,
            };
          }}
        >
          <Icon name="dots-three-vertical" size={20} />
        </Pressable>
      ),
    });
  }, [navigation, visible]);

  const onPress = () => {
    setVisible(() => !visible);
  };

  return { visible };
};

export default useHeaderRight;
