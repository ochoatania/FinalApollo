import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import List2 from "../components/List2";
import Component1 from "../components/Component1";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Page = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page1}>
      <Image
        style={styles.tempimagez7ensm2Icon}
        contentFit="cover"
        source={require("../assets/tempimagez7ensm-2.png")}
      />
      <Pressable
        style={[styles.seconday, styles.secondayLayout]}
        onPress={() => navigation.navigate("Page2")}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector15.png")}
        />
        <Text style={styles.title}>{`Autism- Buddy llama `}</Text>
      </Pressable>
      <View style={[styles.seconday1, styles.secondaySpaceBlock]}>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector16.png")}
        />
        <View style={styles.titleWrapper}>
          <Text
            style={styles.title1}
          >{`Hearing & Speech - ALS Translations`}</Text>
        </View>
      </View>
      <Pressable
        style={[styles.seconday2, styles.secondaySpaceBlock]}
        onPress={() => navigation.navigate("Page3")}
      >
        <Image
          style={styles.vectorIcon2}
          contentFit="cover"
          source={require("../assets/vector17.png")}
        />
        <Text style={styles.title}>{`Physical Disability `}</Text>
      </Pressable>
      <Pressable
        style={[styles.seconday3, styles.secondayLayout]}
        onPress={() => navigation.navigate("Page1")}
      >
        <Image
          style={styles.component3Icon}
          contentFit="cover"
          source={require("../assets/component-31.png")}
        />
        <Text style={styles.title}>InclusiveHub Chat</Text>
      </Pressable>
      <LinearGradient
        style={[styles.page1Child, styles.childBg]}
        locations={[0.22, 0.7]}
        colors={["#bba9ef", "#e0d9f7"]}
      />
      <View style={styles.sectionTitle}>
        <View style={styles.text}>
          <Text style={[styles.title4, styles.title4Typo]}>
            Featured Products
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate("Page2")}
      >
        <Card />
      </Pressable>
      <Text
        style={[
          styles.inclusivehubInspireIncludeContainer,
          styles.title4Layout,
        ]}
      >
        <Text style={styles.inclusivehub}>{`InclusiveHub  
`}</Text>
        <Text style={styles.title4Typo}>
          <Text style={styles.inspireIncludeEmpower1}>
            Inspire, Include, Empower
          </Text>
          <Text style={styles.text1}>{` `}</Text>
        </Text>
      </Text>
      <List2 />
      <View style={styles.component5}>
        <LinearGradient
          style={[styles.component5Child, styles.iconLayout1]}
          locations={[0, 1]}
          colors={["#e0d9f7", "#e0d9f7"]}
        />
        <View style={[styles.seconday4, styles.secondaySpaceBlock]}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title5}>Join InclusiveHub Social</Text>
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
          style={[styles.vectorIcon3, styles.vectorPosition]}
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
      <View style={styles.component5}>
        <LinearGradient
          style={[styles.component5Child, styles.iconLayout1]}
          locations={[0, 1]}
          colors={["#e0d9f7", "#e0d9f7"]}
        />
        <View style={[styles.seconday4, styles.secondaySpaceBlock]}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title5}>Join InclusiveHub Social</Text>
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
        <Pressable
          style={styles.vectorPosition}
          onPress={() => navigation.navigate("Page4")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector11.png")}
          />
        </Pressable>
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
      <Component1 />
    </View>
  );
};

const styles = StyleSheet.create({
  secondayLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 336,
    position: "absolute",
  },
  secondaySpaceBlock: {
    backgroundColor: Color.colorPlum,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  childBg: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  title4Typo: {
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
  },
  title4Layout: {
    lineHeight: 24,
    textAlign: "left",
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
  vectorPosition: {
    left: "5.77%",
    bottom: "28.57%",
    right: "87.76%",
    top: "35.71%",
    width: "6.47%",
    height: "35.71%",
    position: "absolute",
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
  tempimagez7ensm2Icon: {
    top: 76,
    left: -18,
    width: 406,
    height: 100,
    position: "absolute",
  },
  vectorIcon: {
    width: 22,
    height: 22,
  },
  title: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  seconday: {
    top: 233,
    left: 36,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.colorLavender,
    borderRadius: Border.br_5xs,
  },
  vectorIcon1: {
    width: 20,
    height: 22,
  },
  title1: {
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  titleWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  seconday1: {
    top: 167,
    left: 35,
    width: 336,
    backgroundColor: Color.colorPlum,
  },
  vectorIcon2: {
    width: 14,
    height: 18,
  },
  seconday2: {
    top: 295,
    height: 50,
    backgroundColor: Color.colorPlum,
    width: 336,
    left: 36,
  },
  component3Icon: {
    width: 26,
    height: 28,
  },
  seconday3: {
    top: 359,
    left: 38,
  },
  page1Child: {
    top: -1,
    left: 0,
    width: 430,
    height: 77,
  },
  title4: {
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    alignSelf: "stretch",
  },
  text: {
    flex: 1,
  },
  sectionTitle: {
    top: 422,
    left: 37,
    width: 328,
    paddingTop: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  row: {
    top: 475,
    left: 40,
    width: 330,
    flexDirection: "row",
    position: "absolute",
  },
  inclusivehub: {
    fontWeight: "800",
    fontFamily: FontFamily.mulishExtraBold,
    fontSize: FontSize.size_lg,
  },
  inspireIncludeEmpower1: {
    fontSize: FontSize.size_2xs,
  },
  text1: {
    fontSize: FontSize.size_lg,
  },
  inclusivehubInspireIncludeContainer: {
    top: 19,
    left: 29,
    color: Color.colorWhite,
    position: "absolute",
  },
  component5Child: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "transparent",
    position: "absolute",
  },
  title5: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  seconday4: {
    height: "76.19%",
    width: "45.73%",
    top: "17.86%",
    right: "28.41%",
    bottom: "5.95%",
    left: "25.87%",
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
  vectorIcon3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    top: 848,
    left: -1,
    width: 433,
    height: 84,
    position: "absolute",
  },
  page1: {
    backgroundColor: Color.colorWhite,
    height: 932,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Page;
