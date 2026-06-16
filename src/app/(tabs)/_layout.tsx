import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const theme = useColorScheme();
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor:
          theme === "dark" ? Colors.dark.text : Colors.light.text,
        tabBarInactiveTintColor:
          theme === "dark"
            ? Colors.dark.textSecondary
            : Colors.light.textSecondary,
        headerShown: false,
        tabBarStyle: {
          height: 55,
          backgroundColor:
            theme === "dark" ? Colors.dark.background : Colors.light.background,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="foryou"
        options={{
          title: "For You",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Ionicons name="layers" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
