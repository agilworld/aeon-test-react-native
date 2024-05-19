import { StyleSheet, FlexStyle } from "react-native";

// Extend HTMLImageElement to support image lazy loading
declare global {
  namespace StyleSheet {
      interface FlexStyle {
        position?: 'absolute' | 'relative' | 'static' | 'fixed' | undefined;
      }
  }
}