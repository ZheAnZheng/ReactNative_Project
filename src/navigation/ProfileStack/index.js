import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Profile } from "../../screens";
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default MyStack;
