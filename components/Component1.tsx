import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Component1 = () => {
  return (
    <View style={styles.component6}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector20.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.component4Icon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/component-41.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon: {
    width: "8.45%",
    right: "61.15%",
    left: "30.4%",
    bottom: "2.5%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "30%",
    height: "67.5%",
  },
  vectorIcon1: {
    height: "75%",
    width: "8.8%",
    top: "25%",
    right: "91.2%",
    bottom: "0%",
    left: "0%",
  },
  vectorIcon2: {
    width: "6.9%",
    right: "32.6%",
    left: "60.5%",
    bottom: "2.5%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "30%",
    height: "67.5%",
  },
  component4Icon: {
    height: "97.5%",
    width: "10.95%",
    top: "0%",
    right: "0%",
    left: "89.05%",
    bottom: "2.5%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  component6: {
    top: 19,
    left: 181,
    width: 200,
    height: 28,
    position: "absolute",
  },
});

export default Component1;
