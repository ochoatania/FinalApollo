import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const List1 = ({ propMarginTop }) => {
  const listStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.list, styles.listFlexBox, listStyle]}>
      <View style={styles.sectionTitle}>
        <View style={styles.text}>
          <Text style={[styles.title, styles.titleTypo]}>
            Social Feed Latest Blogs, News, Events
          </Text>
        </View>
      </View>
      <View style={[styles.row, styles.rowSpaceBlock]}>
        <View style={styles.post}>
          <View style={styles.user}>
            <View style={styles.avatar}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector13.png")}
              />
              <View style={styles.titleParent}>
                <Text
                  style={[styles.title1, styles.titleLayout]}
                  numberOfLines={1}
                >
                  Taniasamputeelife
                </Text>
                <Text
                  style={[styles.subtitle, styles.title2Typo]}
                  numberOfLines={1}
                >{`2h ago - Atlanta `}</Text>
              </View>
            </View>
            <View style={styles.iconButtons}>
              <Text style={[styles.icon, styles.listFlexBox]} numberOfLines={1}>
                •••
              </Text>
            </View>
          </View>
          <View style={styles.textContent}>
            <Text style={[styles.title2, styles.title2Typo]}>
              Connect with others like you. A space created just for us.
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.listChild, styles.rowSpaceBlock]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  titleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  rowSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  titleLayout: {
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  title2Typo: {
    fontFamily: FontFamily.mulishRegular,
    textAlign: "left",
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
  },
  text: {
    flex: 1,
  },
  sectionTitle: {
    paddingTop: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 27,
    height: 23,
  },
  title1: {
    color: Color.colorPlum,
    textAlign: "left",
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  subtitle: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    color: Color.colorGray_200,
    overflow: "hidden",
  },
  titleParent: {
    marginLeft: 8,
    flex: 1,
  },
  avatar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    display: "flex",
    width: 24,
    height: 24,
    color: Color.colorBlack,
    lineHeight: 24,
  },
  iconButtons: {
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  user: {
    padding: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  title2: {
    color: Color.colorBlack,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  textContent: {
    padding: Padding.p_xs,
    alignSelf: "stretch",
  },
  post: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
  },
  listChild: {
    maxWidth: "100%",
    height: 77,
    width: "100%",
    overflow: "hidden",
  },
  list: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
});

export default List1;
