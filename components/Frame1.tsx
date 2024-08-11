import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame1 = ({
  ellipse5,
  week2Goals,
  propTop,
  propTop1,
  propBottom,
  propTop2,
}) => {
  const frame1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propTop1, propBottom]);

  const week2GoalsStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop2),
    };
  }, [propTop2]);

  return (
    <View style={[styles.frame, styles.framePosition, frame1Style]}>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Image
            style={[styles.frameChild, styles.framePosition]}
            contentFit="cover"
            source={ellipse5}
          />
          <Image
            style={[styles.vectorIcon, vectorIconStyle]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
          <Text style={[styles.week2Goals, week2GoalsStyle]}>{week2Goals}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    width: 53,
    height: 49,
  },
  vectorIcon: {
    height: "55.1%",
    width: "9.31%",
    top: "28.57%",
    right: "84.35%",
    bottom: "16.33%",
    left: "6.34%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  week2Goals: {
    top: 9,
    left: 27,
    fontSize: FontSize.size_base,
    lineHeight: 18,
    fontFamily: FontFamily.mulishRegular,
    color: Color.colorPlum,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 209,
    justifyContent: "center",
    position: "absolute",
  },
  frame2: {
    alignSelf: "stretch",
    height: 49,
    overflow: "hidden",
  },
  frame1: {
    width: 276,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  frame: {
    top: 307,
    width: 430,
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default Frame1;
