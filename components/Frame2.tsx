import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Image } from "expo-image";
import List1 from "./List1";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Frame2 = () => {
  return (
    <View style={[styles.frame, styles.cardFlexBox]}>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.row}>
            <View style={[styles.card, styles.cardFlexBox]}>
              <View style={styles.button}>
                <View style={styles.primary}>
                  <Text
                    style={styles.title}
                  >{`Join InclusiveHub Social `}</Text>
                </View>
              </View>
              <TextInput
                style={styles.textContent}
                label="Share with your community "
                mode="outlined"
                placeholderTextColor="linear-gradient(90deg, #e0d9f6, #5bb0ff)"
                theme={{
                  fonts: {
                    regular: { fontFamily: "Mulish", fontWeight: "Medium" },
                  },
                  colors: { text: "linear-gradient(90deg, #a6e4ff, #e0d9f6)" },
                }}
              />
              <Image
                style={styles.rigeminiFillIcon}
                contentFit="cover"
                source={require("../assets/rigeminifill.png")}
              />
            </View>
          </View>
          <View style={styles.list}>
            <List1 />
          </View>
        </View>
        <View style={[styles.seconday, styles.secondayFlexBox]}>
          <Image
            style={styles.component3Icon}
            contentFit="cover"
            source={require("../assets/component-3.png")}
          />
          <Text style={styles.title}>{`User Request `}</Text>
        </View>
      </View>
      <View style={[styles.seconday1, styles.secondayFlexBox]}>
        <Image
          style={styles.component3Icon}
          contentFit="cover"
          source={require("../assets/component-3.png")}
        />
        <Text style={styles.title}>{`User Input `}</Text>
      </View>
      <View style={[styles.seconday1, styles.secondayFlexBox]}>
        <Image
          style={styles.component3Icon}
          contentFit="cover"
          source={require("../assets/component-3.png")}
        />
        <Text style={styles.title}>User Responses</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  secondayFlexBox: {
    height: 50,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    backgroundColor: Color.colorLavender,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  primary: {
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.colorLavender,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  button: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  textContent: {
    padding: Padding.p_5xs,
    alignSelf: "stretch",
  },
  rigeminiFillIcon: {
    width: 32,
    height: 28,
    overflow: "hidden",
  },
  card: {
    flex: 1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  list: {
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  frame2: {
    justifyContent: "flex-end",
    paddingRight: Padding.p_12xs,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  component3Icon: {
    width: 26,
    height: 28,
  },
  seconday: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_4xs,
    borderBottomRightRadius: Border.br_4xs,
    marginTop: -28,
  },
  frame1: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  seconday1: {
    marginTop: 8,
    borderRadius: Border.br_5xs,
    height: 50,
  },
  frame: {
    position: "absolute",
    top: 228,
    left: 39,
    width: 347,
  },
});

export default Frame2;
