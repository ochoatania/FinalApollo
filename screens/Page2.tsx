import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Frame from "../components/Frame";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Page2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page2}>
      <View style={[styles.frame, styles.titleFlexBox1]}>
        <View style={styles.component5}>
          <LinearGradient
            style={[styles.component5Child, styles.iconLayout1]}
            locations={[0, 1]}
            colors={["#e0d9f7", "#e0d9f7"]}
          />
          <View style={[styles.seconday, styles.secondaySpaceBlock]}>
            <View style={[styles.titleWrapper, styles.titleFlexBox1]}>
              <Text style={[styles.title, styles.titleFlexBox]}>
                Join InclusiveHub Social
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.vector, styles.vectorLayout]}
            onPress={() => navigation.navigate("Page2")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </Pressable>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Pressable
            style={[styles.vector1, styles.vectorLayout]}
            onPress={() => navigation.navigate("Page3")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </Pressable>
          <Image
            style={[styles.component1Icon, styles.component2Position]}
            contentFit="cover"
            source={require("../assets/component-1.png")}
          />
          <Pressable
            style={styles.component2Position}
            onPress={() => navigation.navigate("Page1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/component-1.png")}
            />
          </Pressable>
        </View>
      </View>
      <Frame title="Ask Buddy llama for help " />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <View style={[styles.seconday1, styles.secondayBorder]}>
            <Text style={[styles.title1, styles.titleClr]}>
              Prompt - Are you feeling sad? Having a hard day?
            </Text>
          </View>
        </View>
      </View>
      <Frame
        title="Placeholder for llama response "
        propTop={608}
        propFontWeight="300"
        propFontFamily="Mulish-Light"
      />
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <View style={[styles.frame4, styles.frameFlexBox]}>
          <View style={[styles.seconday2, styles.secondayBorder]}>
            <View style={[styles.titleContainer, styles.titleFlexBox1]}>
              <Text style={[styles.title2, styles.titleClr]}>
                <Text
                  style={[styles.buddyLlama, styles.buddyLlamaTypo]}
                >{`Buddy LLama 
`}</Text>
                <Text style={styles.yourHelpfulCompanion}>
                  Your helpful companion
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frame5, styles.frameFlexBox]}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <View style={styles.frameChild} />
        </View>
      </View>
      <View style={[styles.frame7, styles.frameFlexBox]}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <LinearGradient
            style={styles.frame9}
            locations={[0.22, 0.7]}
            colors={["#bba9ef", "#e0d9f7"]}
          >
            <Text style={styles.autismBuddyLlamaContainer}>
              <Text style={styles.autismBuddyLlama}>{`Autism- Buddy llama  
`}</Text>
              <Text style={styles.buddyLlamaTypo}>
                <Text style={styles.inspireIncludeEmpower1}>
                  Inspire, Include, Empower
                </Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
            </Text>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame.png")}
            />
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  secondaySpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
  },
  titleFlexBox: {
    textAlign: "center",
    flex: 1,
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
    right: "4.84%",
    top: "22.62%",
    width: "8.09%",
    height: "46.43%",
    bottom: "30.95%",
    position: "absolute",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  secondayBorder: {
    borderWidth: 1,
    borderColor: Color.colorMediumpurple,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  titleClr: {
    color: Color.colorMediumpurple,
    lineHeight: 22,
  },
  buddyLlamaTypo: {
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
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
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray_100,
    fontWeight: "500",
    lineHeight: 22,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  titleWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  seconday: {
    height: "76.19%",
    width: "45.74%",
    top: "17.86%",
    right: "28.39%",
    bottom: "5.95%",
    left: "25.88%",
    backgroundColor: Color.colorPlum,
    borderRadius: Border.br_5xs,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "17.1%",
    top: "36.9%",
    right: "76.66%",
    width: "6.24%",
    bottom: "30.95%",
    height: "32.14%",
  },
  vectorIcon: {
    height: "35.71%",
    width: "6.47%",
    top: "35.71%",
    right: "87.74%",
    bottom: "28.57%",
    left: "5.78%",
    position: "absolute",
  },
  vector1: {
    left: "76.68%",
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
  component5: {
    height: 84,
    alignSelf: "stretch",
  },
  frame: {
    top: 848,
    width: 434,
    left: -2,
    position: "absolute",
    overflow: "hidden",
  },
  title1: {
    fontWeight: "100",
    fontFamily: FontFamily.robotoThin,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  seconday1: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
  },
  frame2: {
    alignSelf: "stretch",
  },
  frame1: {
    top: 445,
    left: 10,
    width: 393,
    position: "absolute",
  },
  buddyLlama: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.mulishMedium,
  },
  yourHelpfulCompanion: {
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    fontSize: FontSize.size_xs,
  },
  title2: {
    textAlign: "center",
    flex: 1,
  },
  titleContainer: {
    width: 125,
    flexDirection: "row",
  },
  seconday2: {
    height: 44,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
  },
  frame4: {
    width: 204,
  },
  frame3: {
    top: 85,
    width: 319,
    left: -2,
    position: "absolute",
  },
  frameChild: {
    height: 274,
    alignSelf: "stretch",
  },
  frame5: {
    top: 153,
    width: 409,
    left: -2,
    position: "absolute",
  },
  autismBuddyLlama: {
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
  autismBuddyLlamaContainer: {
    lineHeight: 24,
    color: Color.colorWhite,
    width: 197,
    height: 54,
    textAlign: "left",
  },
  frameIcon: {
    width: 26,
    height: 31,
    marginLeft: 169,
    overflow: "hidden",
  },
  frame9: {
    height: 77,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame7: {
    top: -1,
    width: 433,
    left: -2,
    position: "absolute",
  },
  page2: {
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Page2;
