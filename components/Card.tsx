import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.button}>
        <View style={styles.primary}>
          <Text style={styles.title}>Get Started with Buddy LLama</Text>
        </View>
      </View>
      <View style={styles.textContent}>
        <Text style={[styles.title1, styles.textTypo]}>
          Ask Buddy llama for help
        </Text>
        <View style={[styles.textContentInner, styles.subtitleWrapperFlexBox]}>
          <View style={[styles.subtitleWrapper, styles.subtitleWrapperFlexBox]}>
            <Text style={styles.subtitle}>Autism Spectrum Assistant</Text>
          </View>
        </View>
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.geminiAssistant}>Gemini Assistant</Text>
          <Text style={styles.text1}>{`  `}</Text>
        </Text>
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector18.png")}
      />
      <View style={styles.rigeminiFill} />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  subtitleWrapperFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    lineHeight: 22,
    fontFamily: FontFamily.mulishBold,
    color: Color.colorGray_100,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  primary: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorLavender,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
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
  title1: {
    fontWeight: "800",
    fontFamily: FontFamily.mulishExtraBold,
    alignSelf: "stretch",
  },
  subtitle: {
    lineHeight: 24,
    fontFamily: FontFamily.mulishMedium,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_base,
    flex: 1,
  },
  subtitleWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  textContentInner: {
    width: 203,
    marginTop: 4,
  },
  geminiAssistant: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  text1: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  text: {
    marginTop: 4,
  },
  textContent: {
    height: 48,
    padding: Padding.p_5xs,
    alignSelf: "stretch",
  },
  vectorIcon: {
    width: 26,
    height: 24,
  },
  rigeminiFill: {
    height: 24,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  card: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default Card;
