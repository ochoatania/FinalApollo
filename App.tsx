const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Page from "./screens/Page";
import Page2 from "./screens/Page2";
import Page3 from "./screens/Page3";
import Page1 from "./screens/Page1";
import Page4 from "./screens/Page4";
import Text1 from "./components/Text1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Mulish-Light": require("./assets/fonts/Mulish-Light.ttf"),
    "Mulish-Regular": require("./assets/fonts/Mulish-Regular.ttf"),
    "Mulish-Medium": require("./assets/fonts/Mulish-Medium.ttf"),
    "Mulish-Bold": require("./assets/fonts/Mulish-Bold.ttf"),
    "Mulish-ExtraBold": require("./assets/fonts/Mulish-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Page"
              component={Page}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page2"
              component={Page2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page3"
              component={Page3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page1"
              component={Page1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page4"
              component={Page4}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
