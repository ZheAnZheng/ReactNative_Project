import { StyleSheet } from "react-native";
import Color from "../../styles/Common/Color.js";
import Size from "../../styles/Common/Size";

const style = StyleSheet.create({
  ListContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    height: 100,
    borderBottomWidth: 1,
    borderColor: "grey",
    backgroundColor: Color.White,
  },
  Avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Color.Grey,
  },
  Name: {
    fontSize: Size.h3,
  },
  Description: {
    width: 250,
  },
});

export default style;
