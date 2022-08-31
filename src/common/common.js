import { Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

module.exports = {
  deviceHeight,
  deviceWidth,

  redColor: "#e81f01",
  whiteColor: "#ffffff",
  blackColor: "#000000",
};
