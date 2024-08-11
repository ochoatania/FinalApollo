import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame = ({ title, propTop, propFontWeight, propFontFamily }) => {
  const frameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const titleStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", propFontWeight),
      ...getStyleValue("fontFamily", propFontFamily),
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <View style={[styles.frame, frameStyle]}>
      <View style={styles.frame1}>
        <View style={[styles.button, styles.buttonSpaceBlock]}>
          <View style={[styles.seconday, styles.buttonSpaceBlock]}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.mulishMedium,
    color: Color.colorMediumpurple,
    textAlign: "left",
  },
  seconday: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorMediumpurple,
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
  },
  button: {
    paddingVertical: 0,
    overflow: "hidden",
    paddingHorizontal: Padding.p_xs,
  },
  frame1: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  frame: {
    position: "absolute",
    top: 514,
    left: -2,
    width: 405,
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
  },
});

export default Frame;
