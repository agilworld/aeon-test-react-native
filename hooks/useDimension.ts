import { Dimensions } from "react-native";

export const useDimension = () => {
  const { width, height } = Dimensions.get("screen");
  return { screenWidth:width, screenHeight: height };
}