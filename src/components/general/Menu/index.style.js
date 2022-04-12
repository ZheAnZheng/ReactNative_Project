import { StyleSheet } from "react-native";
import { Color } from "../../../styles";
const style = StyleSheet.create({
  Container: {
    positiotn: "absolute",
    paddingHorizontal: 0,
    backgroundColor: Color.Mute,
    justifyContent: "center",
    alignItems: "center",
  },
  Item: {
    width: "100%",
    maxWidth: 750,
  },
  ItemTitle: {
    color: Color.White,
  },
  White: {
    color: Color.White,
  },
});

export default style;
