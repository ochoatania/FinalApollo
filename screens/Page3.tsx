import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Frame1 from "../components/Frame1";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Page3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page3}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.component6}>
          <LinearGradient
            style={[styles.component6Child, styles.iconLayout1]}
            locations={[0, 1]}
            colors={["#e0d9f7", "#e0d9f7"]}
          />
          <View style={styles.seconday}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Join InclusiveHub Social</Text>
            </View>
          </View>
          <Pressable
            style={[styles.vector, styles.vectorLayout]}
            onPress={() => navigation.navigate("Page2")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
          </Pressable>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Pressable
            style={[styles.vector1, styles.vectorLayout]}
            onPress={() => navigation.navigate("Page3")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector5.png")}
            />
          </Pressable>
          <Image
            style={[styles.component1Icon, styles.component2Position]}
            contentFit="cover"
            source={require("../assets/component-11.png")}
          />
          <Pressable
            style={styles.component2Position}
            onPress={() => navigation.navigate("Page1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/component-11.png")}
            />
          </Pressable>
        </View>
      </View>
      <LinearGradient
        style={[styles.frame1, styles.frameLayout]}
        locations={[0.22, 0.7]}
        colors={["#bba9ef", "#e0d9f6"]}
      >
        <Text style={styles.physicalDisabilityInspireContainer}>
          <Text style={styles.physicalDisability}>{`Physical Disability  
`}</Text>
          <Text style={styles.inspireIncludeEmpower}>
            <Text style={styles.inspireIncludeEmpower1}>
              Inspire, Include, Empower
            </Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
        </Text>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </LinearGradient>
      <View style={[styles.frame2, styles.frameLayout]}>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <View style={styles.frame4}>
            <Text style={[styles.week1Goals, styles.goalsTypo]}>
              Week 1 Goals
            </Text>
            <Image
              style={[styles.frameChild, styles.framePosition]}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Image
              style={styles.vectorIcon2}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
          </View>
        </View>
      </View>
      <Frame1
        ellipse5={require("../assets/ellipse-5.png")}
        week2Goals="Week 2 Goals"
      />
      <View style={[styles.frame5, styles.frameLayout]}>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <View style={styles.frame4}>
            <Image
              style={[styles.frameChild, styles.framePosition]}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Text style={[styles.week3Goals, styles.goalsTypo]}>
              Week 3 Goals
            </Text>
            <Image
              style={[styles.vectorIcon3, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector9.png")}
            />
            <Image
              style={[styles.vectorIcon4, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector9.png")}
            />
          </View>
        </View>
      </View>
      <Frame1
        ellipse5={require("../assets/ellipse-3.png")}
        week2Goals="Week 4 Goals"
        propTop={455}
        propTop1="20.41%"
        propBottom="24.49%"
        propTop2={19}
      />
      <View style={styles.frame8}>
        <View style={[styles.frame9, styles.frameFlexBox]}>
          <View style={[styles.frame10, styles.frameSpaceBlock]}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
            <Text
              style={[
                styles.geminiGoalAssistant,
                styles.typeYourDisabilityTypo,
              ]}
            >{`Gemini Goal Assistant  will provide you with weekly and monthly goals based on your disability. `}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame11, styles.frameLayout]}>
        <View style={[styles.frame9, styles.frameFlexBox]}>
          <View style={[styles.frame13, styles.frameSpaceBlock]}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
            <Text
              style={[styles.typeYourDisability, styles.typeYourDisabilityTypo]}
            >
              Type your disability
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame14, styles.frameFlexBox]}>
        <LinearGradient
          style={[styles.frame15, styles.frameFlexBox]}
          locations={[0, 1]}
          colors={["#e0d9f7", "#bba9ef"]}
        >
          <Text
            style={styles.placeholderForGemini}
          >{`Placeholder for gemini answers `}</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "flex-end",
    overflow: "hidden",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  vectorLayout: {
    height: "32.14%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component2Position: {
    left: "87.06%",
    right: "4.86%",
    top: "22.62%",
    width: "8.07%",
    height: "46.43%",
    bottom: "30.95%",
    position: "absolute",
  },
  frameLayout: {
    width: 430,
    position: "absolute",
    overflow: "hidden",
  },
  goalsTypo: {
    display: "flex",
    color: Color.colorPlum,
    fontFamily: FontFamily.mulishRegular,
    left: 26,
    width: 209,
    lineHeight: 18,
    textAlign: "center",
    fontSize: FontSize.size_base,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  framePosition: {
    top: 0,
    left: 0,
  },
  vectorIconLayout: {
    left: "5.94%",
    right: "84.71%",
    width: "9.35%",
    height: "55.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_22xl,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  typeYourDisabilityTypo: {
    marginLeft: -14,
    display: "flex",
    fontFamily: FontFamily.mulishRegular,
    lineHeight: 18,
    textAlign: "center",
    fontSize: FontSize.size_base,
    alignItems: "center",
    justifyContent: "center",
  },
  component6Child: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "transparent",
    position: "absolute",
  },
  title: {
    lineHeight: 22,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray_100,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    flex: 1,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  seconday: {
    height: "76.19%",
    width: "45.73%",
    top: "17.86%",
    right: "28.39%",
    bottom: "5.95%",
    left: "25.87%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorPlum,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "17.09%",
    top: "36.9%",
    right: "76.67%",
    width: "6.24%",
    bottom: "30.95%",
    height: "32.14%",
  },
  vectorIcon: {
    height: "35.71%",
    width: "6.47%",
    top: "35.71%",
    right: "87.75%",
    bottom: "28.57%",
    left: "5.78%",
    position: "absolute",
  },
  vector1: {
    left: "76.67%",
    top: "34.52%",
    right: "18.23%",
    bottom: "33.33%",
    width: "5.09%",
  },
  component1Icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component6: {
    height: 84,
    alignSelf: "stretch",
  },
  frame: {
    top: 848,
    left: -3,
    width: 436,
    justifyContent: "center",
    position: "absolute",
  },
  physicalDisability: {
    fontWeight: "800",
    fontFamily: FontFamily.mulishExtraBold,
    fontSize: FontSize.size_lg,
  },
  inspireIncludeEmpower1: {
    fontSize: FontSize.size_2xs,
  },
  text: {
    fontSize: FontSize.size_lg,
  },
  inspireIncludeEmpower: {
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
  },
  physicalDisabilityInspireContainer: {
    lineHeight: 24,
    color: Color.colorWhite,
    textAlign: "left",
  },
  vectorIcon1: {
    width: 22,
    height: 27,
    marginTop: -42,
  },
  frame1: {
    height: 77,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_10xl,
    paddingVertical: Padding.p_lgi,
    left: 0,
    top: 0,
    backgroundColor: "transparent",
  },
  week1Goals: {
    top: 10,
    width: 209,
  },
  frameChild: {
    width: 53,
    height: 49,
    left: 0,
    position: "absolute",
  },
  vectorIcon2: {
    top: "20.41%",
    right: "84.28%",
    bottom: "24.49%",
    left: "6.38%",
    width: "9.35%",
    height: "55.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frame4: {
    height: 49,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame3: {
    width: 276,
    justifyContent: "center",
  },
  frame2: {
    top: 233,
    left: 0,
    justifyContent: "center",
  },
  week3Goals: {
    top: 21,
    width: 209,
  },
  vectorIcon3: {
    top: "22.45%",
    bottom: "22.45%",
  },
  vectorIcon4: {
    top: "24.49%",
    bottom: "20.41%",
  },
  frame5: {
    top: 381,
    left: 0,
    justifyContent: "center",
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  geminiGoalAssistant: {
    width: 338,
    height: 97,
  },
  frame10: {
    height: 89,
  },
  frame9: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frame8: {
    top: 521,
    left: 13,
    width: 399,
    height: 121,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  typeYourDisability: {
    width: 209,
  },
  frame13: {
    height: 67,
  },
  frame11: {
    top: 136,
    left: -24,
    justifyContent: "center",
  },
  placeholderForGemini: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorLavender,
    lineHeight: 18,
    textAlign: "center",
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  frame15: {
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_74xl,
    backgroundColor: "transparent",
    alignSelf: "stretch",
  },
  frame14: {
    top: 642,
    left: 7,
    width: 415,
    height: 181,
    justifyContent: "center",
    position: "absolute",
  },
  page3: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Page3;
