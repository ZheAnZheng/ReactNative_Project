import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chat, Today, Voom, Wallet } from "../../screens";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeStack from "../ProfileStack";
Icon.loadFont();

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              focused === true ? (size = 30) : size;
              return <Icon name="home" color={color} size={size} />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              focused === true ? (size = 30) : size;
              return <Icon name="comment" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Voom"
          component={Voom}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              focused === true ? (size = 30) : size;
              return <Icon name="tree" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Today"
          component={Today}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              focused === true ? (size = 30) : size;
              return <Icon name="rss" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              focused === true ? (size = 30) : size;
              return <Icon name="money" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
