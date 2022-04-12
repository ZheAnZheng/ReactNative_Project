import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import Avatar from "../../components/general/Avatar";
import Menu from "../../components/general/Menu";
import Style from "./index.style";
import useHeaderRight from "../../Hooks/useHeaderRIght";
import useFetch from "../../Hooks/useFetch";
import { URL } from "../../Constants/MockURL.js";
const Item = ({ item, navigation }) => {
  const onPress = () => {
    navigation.navigate("Profile", {
      name: item.name,
      description: item.description,
      age: item.age,
      avatar: item.avatar,
    });
  };

  return (
    <TouchableOpacity onPress={onPress} style={Style.ListContainer}>
      <Avatar src={item.avatar} />
      <View>
        <Text style={Style.Name}>{item.name}</Text>
        <Text style={Style.Description} ellipsizeMode="tail" numberOfLines={1}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const { visible: menuVisible } = useHeaderRight({ navigation });
  const { data } = useFetch({
    url: URL,
  });

  const renderItem = ({ item }) => (
    <Item item={item} navigation={navigation} key={item.id} />
  );

  return (
    <View>
      {menuVisible && <Menu />}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
