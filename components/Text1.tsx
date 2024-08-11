import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily } from "../GlobalStyles";

const Text1 = () => {
  return (
    <View style={styles.text}>
      <Text style={styles.title}>
        Coming Soon! Let Gemini AI Help you translate using sign language.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "stretch",
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.mulishMedium,
    textAlign: "left",
  },
  text: {
    width: 322,
  },
});

export default Text1;
