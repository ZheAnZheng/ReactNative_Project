import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import Avatar from "../../components/general/Avatar";
import ProfileStyle from "./index.style";
const Profile = ({ route, navigation }) => {
  const { name, age, description, avatar } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);

  return (
    <View style={ProfileStyle.container}>
      <Avatar src={avatar} diameter={100} />
      <Text style={ProfileStyle.name}>{name}</Text>
      <Text style={ProfileStyle.age}>{age} year old</Text>
      <Text style={ProfileStyle.description}>{description}</Text>
    </View>
  );
};

export default Profile;
