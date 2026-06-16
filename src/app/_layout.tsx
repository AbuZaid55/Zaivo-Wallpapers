import { Colors } from "@/constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Appearance, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Theme = "light" | "dark" | "unspecified";

export default function Layout() {
  const [isReady, setIsReady] = useState(false);
  const theme = useColorScheme();
  const isDark = theme === "dark";

  const loadTheme = async () => {
    const savedTheme = await AsyncStorage.getItem("theme");
    if (savedTheme) {
      Appearance.setColorScheme(savedTheme as Theme);
    }
    setIsReady(true);
  };

  useEffect(() => {
    loadTheme();
  }, []);

  if (!isReady) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: isDark
              ? Colors.dark.background
              : Colors.light.background,
          },
          headerTintColor: isDark ? Colors.dark.text : Colors.light.text,
          headerTitleStyle: {
            color: isDark ? Colors.dark.text : Colors.light.text,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(nobottomtabs)/accountinfo"
          options={{
            headerTitle: "Account Info",
          }}
        />
        <Stack.Screen
          name="(nobottomtabs)/privacy_policy"
          options={{
            headerTitle: "Privacy Policy",
          }}
        />
        <Stack.Screen
          name="(nobottomtabs)/terms_of_service"
          options={{
            headerTitle: "Terms of Service",
          }}
        />
        <Stack.Screen
          name="(nobottomtabs)/licenses"
          options={{
            headerTitle: "Licenses",
          }}
        />
        <Stack.Screen
          name="(nobottomtabs)/version"
          options={{
            headerTitle: "Version",
          }}
        />
        <Stack.Screen
          name="(nobottomtabs)/disclaimer"
          options={{
            headerTitle: "Disclaimer",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
