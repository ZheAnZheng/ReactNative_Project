import React from "react";
import { StyleSheet } from "react-native";
const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    padding: 30,
  },
  name: {
    fontSize: 32,
    marginVertical: 16,
  },
  age: {
    fontSize: 16,
    marginBottom: 16,
  },
  description: {
    fontSize: 20,
  },
});

export default ProfileStyle;
