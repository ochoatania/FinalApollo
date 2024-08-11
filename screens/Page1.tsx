import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Frame2 from "../components/Frame2";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Page1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page5}>
      <View style={styles.frame}>
        <LinearGradient
          style={[styles.frame1, styles.frame1FlexBox]}
          locations={[0.5, 0.9]}
          colors={["#bba9ef", "#e0d9f7"]}
        >
          <Text style={styles.inclusivehubChatInspireContainer}>
            <Text style={styles.inclusivehubChat}>{`InclusiveHub Chat 
`}</Text>
            <Text style={styles.inspireIncludeEmpower}>
              <Text style={styles.inspireIncludeEmpower1}>
                Inspire, Include, Empower
              </Text>
              <Text style={styles.text}>{` `}</Text>
            </Text>
          </Text>
          <Image
            style={styles.component4Icon}
            contentFit="cover"
            source={require("../assets/component-4.png")}
          />
        </LinearGradient>
        <View style={styles.component5}>
          <LinearGradient
            style={[styles.component5Child, styles.iconLayout1]}
            locations={[0, 1]}
            colors={["#e0d9f7", "#e0d9f7"]}
          />
          <View style={[styles.seconday, styles.secondayFlexBox]}>
            <View style={[styles.titleWrapper, styles.secondayFlexBox]}>
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
      </View>
      <Frame2 />
    </View>
  );
};

const styles = StyleSheet.create({
  frame1FlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  secondayFlexBox: {
    justifyContent: "center",
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
  inclusivehubChat: {
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
  inclusivehubChatInspireContainer: {
    lineHeight: 24,
    color: Color.colorWhite,
    textAlign: "left",
    flex: 1,
  },
  component4Icon: {
    width: 42,
    height: 33,
    marginLeft: 171,
  },
  frame1: {
    paddingHorizontal: Padding.p_10xl,
    paddingTop: 20,
    paddingBottom: Padding.p_lgi,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  component5Child: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "transparent",
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray_100,
    textAlign: "center",
    fontWeight: "500",
    flex: 1,
  },
  titleWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  seconday: {
    height: "76.19%",
    width: "45.73%",
    top: "17.86%",
    right: "28.41%",
    bottom: "5.95%",
    left: "25.87%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorPlum,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
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
  component5: {
    height: 84,
    marginTop: 772,
    alignSelf: "stretch",
  },
  frame: {
    top: -1,
    left: -1,
    width: 433,
    justifyContent: "flex-end",
    position: "absolute",
    overflow: "hidden",
  },
  page5: {
    backgroundColor: Color.colorWhite,
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Page1;
