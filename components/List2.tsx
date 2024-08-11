import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import List1 from "./List1";
import { FontSize, FontFamily, Padding } from "../GlobalStyles";

const List2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.list} onPress={() => navigation.navigate("Page1")}>
      <View style={styles.text}>
        <Text style={styles.title}>Coming Soon!</Text>
      </View>
      <List1 propMarginTop={8} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.mulishMedium,
    textAlign: "left",
    alignSelf: "stretch",
  },
  text: {
    alignSelf: "stretch",
  },
  list: {
    position: "absolute",
    top: 636,
    left: 28,
    width: 346,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
  },
});

export default List2;
