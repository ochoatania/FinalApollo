import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Page4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page4}>
      <View style={[styles.component6, styles.frame1Position]}>
        <LinearGradient
          style={[styles.component6Child, styles.iconLayout1]}
          locations={[0, 1]}
          colors={["#e0d9f7", "#e0d9f7"]}
        />
        <View style={styles.seconday}>
          <View style={[styles.titleWrapper, styles.frameFlexBox]}>
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
            source={require("../assets/vector10.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Pressable
          style={[styles.vector1, styles.vectorLayout]}
          onPress={() => navigation.navigate("Page3")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector12.png")}
          />
        </Pressable>
        <Image
          style={[styles.component1Icon, styles.component2Position]}
          contentFit="cover"
          source={require("../assets/component-12.png")}
        />
        <Pressable
          style={styles.component2Position}
          onPress={() => navigation.navigate("Page1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/component-12.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.button}>
          <View style={styles.secondayBorder}>
            <Text style={[styles.title1, styles.titleClr]}>
              Communicate using sign language
            </Text>
          </View>
          <View style={[styles.seconday2, styles.secondayBorder]}>
            <Text style={[styles.title2, styles.titleClr]}>
              Show me how to sign
            </Text>
          </View>
        </View>
      </View>
      <LinearGradient
        style={[styles.frame1, styles.frameFlexBox]}
        locations={[0.22, 0.7]}
        colors={["#bba9ef", "#e0d9f6"]}
      >
        <Text style={styles.hearingSpeechContainer}>
          <Text
            style={styles.hearingSpeech}
          >{`Hearing & Speech - ALS Translations   
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
          source={require("../assets/vector14.png")}
        />
      </LinearGradient>
      <View style={[styles.frame2, styles.framePosition]}>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <Image
            style={styles.rigeminiIconLayout}
            contentFit="cover"
            source={require("../assets/rigeminifill1.png")}
          />
          <Text
            style={[styles.geminiAlsAssistant, styles.geminiTypo]}
          >{`Gemini ALS Assistant `}</Text>
        </View>
      </View>
      <Image
        style={[styles.rigeminiFillIcon1, styles.rigeminiIconLayout]}
        contentFit="cover"
        source={require("../assets/rigeminifill1.png")}
      />
      <LinearGradient
        style={[styles.frame4, styles.framePosition]}
        locations={[0, 1]}
        colors={["#e0d9f7", "#bba9ef"]}
      >
        <Text
          style={[styles.placeholderForGemini, styles.geminiTypo]}
        >{`Placeholder for gemini answers `}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1Position: {
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
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
    left: "87.07%",
    right: "4.85%",
    top: "22.62%",
    width: "8.08%",
    height: "46.43%",
    bottom: "30.95%",
    position: "absolute",
  },
  framePosition: {
    alignItems: "flex-end",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  titleClr: {
    color: Color.colorMediumpurple,
    textAlign: "left",
    lineHeight: 22,
  },
  secondayBorder: {
    borderWidth: 1,
    borderColor: Color.colorMediumpurple,
    borderStyle: "solid",
    alignSelf: "stretch",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
  },
  geminiTypo: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 18,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  rigeminiIconLayout: {
    height: 24,
    width: 33,
    overflow: "hidden",
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
    color: Color.colorGray_100,
    textAlign: "center",
    lineHeight: 22,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    flex: 1,
  },
  titleWrapper: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  seconday: {
    height: "76.19%",
    width: "45.73%",
    top: "17.86%",
    right: "28.41%",
    bottom: "5.95%",
    left: "25.87%",
    backgroundColor: Color.colorPlum,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_xs,
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
    right: "87.76%",
    bottom: "28.57%",
    left: "5.77%",
    position: "absolute",
  },
  vector1: {
    left: "76.67%",
    top: "34.52%",
    right: "18.24%",
    bottom: "33.33%",
    width: "5.08%",
  },
  component1Icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component6: {
    top: 848,
    height: 84,
    width: 433,
  },
  title1: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.size_base,
    color: Color.colorMediumpurple,
    fontWeight: "500",
  },
  title2: {
    fontSize: FontSize.size_xs,
    fontWeight: "100",
    fontFamily: FontFamily.robotoThin,
    textAlign: "left",
  },
  seconday2: {
    marginTop: 8,
  },
  button: {
    paddingVertical: 0,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_xs,
    overflow: "hidden",
  },
  frame: {
    top: 438,
    width: 391,
    justifyContent: "center",
  },
  hearingSpeech: {
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
  hearingSpeechContainer: {
    lineHeight: 24,
    color: Color.colorWhite,
    textAlign: "left",
    flex: 1,
  },
  vectorIcon1: {
    width: 35,
    height: 34,
    marginLeft: 24,
  },
  frame1: {
    top: 0,
    width: 430,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_lgi,
    paddingBottom: Padding.p_3xs,
    backgroundColor: "transparent",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  geminiAlsAssistant: {
    marginLeft: -1,
    flex: 1,
  },
  frame3: {
    width: 232,
    overflow: "hidden",
  },
  frame2: {
    top: 357,
    width: 309,
    justifyContent: "center",
  },
  rigeminiFillIcon1: {
    top: 127,
    left: 23,
    position: "absolute",
  },
  placeholderForGemini: {
    color: Color.colorLavender,
    alignSelf: "stretch",
  },
  frame4: {
    top: 619,
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_74xl,
    backgroundColor: "transparent",
    width: 433,
  },
  page4: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
});

export default Page4;
