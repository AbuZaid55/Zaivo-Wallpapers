import DownloadPicture from "@/components/DownloadPicture";
import Library from "@/components/HomePage/library";
import Liked from "@/components/HomePage/liked";
import Suggested from "@/components/HomePage/Suggested";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { WallpaperWithDetails } from "@/hooks/useWallpapers";
import { createMaterialTopTabNavigator } from "expo-router/js-top-tabs";
import { useState } from "react";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const [selectedWallpaper, setSelectedWallpaper] =
    useState<null | WallpaperWithDetails>(null);
  const theme = useColorScheme();
  return (
    <ThemedView style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor:
            theme === "dark" ? Colors.dark.background : Colors.light.background,
        }}
      >
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor:
                theme === "dark"
                  ? Colors.dark.background
                  : Colors.light.background,
            },

            tabBarActiveTintColor:
              theme === "dark" ? Colors.dark.text : Colors.light.text,

            tabBarInactiveTintColor:
              theme === "dark"
                ? Colors.dark.textSecondary
                : Colors.light.textSecondary,

            tabBarIndicatorStyle: {
              backgroundColor:
                theme === "dark" ? Colors.dark.text : Colors.light.text,
              height: 4,
              borderRadius:2
            },

            tabBarLabelStyle: {
              fontWeight: "700",
              textTransform: "capitalize",
              marginBottom:5
            },
          }}
        >
          <Tab.Screen name="Suggested">
            {() => <Suggested setSelectedWallpaper={setSelectedWallpaper} />}
          </Tab.Screen>
          <Tab.Screen name="Liked">
            {() => <Liked setSelectedWallpaper={setSelectedWallpaper} />}
          </Tab.Screen>
          <Tab.Screen name="Library">
            {() => <Library setSelectedWallpaper={setSelectedWallpaper} />}
          </Tab.Screen>
        </Tab.Navigator>
      </SafeAreaView>
      {selectedWallpaper && (
        <DownloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </ThemedView>
  );
}
