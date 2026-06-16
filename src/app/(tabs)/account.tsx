import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Appearance,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

type Theme = "light" | "dark" | "unspecified";

export default function Account() {
  const theme = useColorScheme() ?? "light";
  const [selectedthem, setSelectedTheme] = useState<Theme>(theme);

  const changeTheme = async (mode: Theme) => {
    setSelectedTheme(mode);
    await AsyncStorage.setItem("theme", mode);
    Appearance.setColorScheme(mode);
  };
  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{
        paddingBottom: 10,
      }}>
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ marginLeft: 22, paddingTop: 10, marginBottom: 25 }}>
          <ThemedText
            style={{ fontSize: 30, fontWeight: "600", lineHeight: 35 }}
          >
            Panels
          </ThemedText>
          <ThemedText
            style={{
              color:
                theme === "dark"
                  ? Colors.dark.textSecondary
                  : Colors.light.textSecondary,
            }}
          >
            Sign in to save your data
          </ThemedText>
        </View>
        <Pressable
          style={[
            style.signin_button,
            {
              marginBottom: 10,
              borderColor:
                theme === "dark" ? Colors.dark.text : Colors.light.text,
            },
          ]}
        >
          <Ionicons
            color={theme === "dark" ? Colors.dark.text : Colors.light.text}
            style={{ marginRight: 6 }}
            name="logo-google"
            size={23}
          />
          <ThemedText style={{ fontWeight: "600" }}>Sign in</ThemedText>
        </Pressable>
        <Pressable
          style={[
            style.signin_button,
            {
              borderColor:
                theme === "dark" ? Colors.dark.text : Colors.light.text,
            },
          ]}
        >
          <Ionicons
            color={theme === "dark" ? Colors.dark.text : Colors.light.text}
            style={{ marginRight: 6 }}
            name="logo-apple"
            size={23}
          />
          <ThemedText style={{ fontWeight: "600" }}>Sign in</ThemedText>
        </Pressable>

        <View style={{ marginHorizontal: 22, marginTop: 25 }}>
          <ThemedText
            style={{ fontSize: 30, fontWeight: "600", lineHeight: 35 }}
          >
            Settings
          </ThemedText>
          <ThemedText
            style={{
              color:
                theme === "dark"
                  ? Colors.dark.textSecondary
                  : Colors.light.textSecondary,
            }}
          >
            Theme
          </ThemedText>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
              marginTop: 10,
            }}
          >
            <ThemeButton
              title="Dark"
              colorScheme="dark"
              onClick={(theme: Theme) => changeTheme(theme)}
              selected={selectedthem === "dark"}
            />
            <ThemeButton
              title="Light"
              colorScheme="light"
              onClick={(theme: Theme) => changeTheme(theme)}
              selected={selectedthem === "light"}
            />
            <ThemeButton
              title="System"
              colorScheme="unspecified"
              selected={selectedthem === "unspecified"}
              onClick={(theme: Theme) => changeTheme(theme)}
            />
          </View>

          <ThemedText
            style={{
              marginTop: 10,
              color:
                theme === "dark"
                  ? Colors.dark.textSecondary
                  : Colors.light.textSecondary,
            }}
          >
            Apps
          </ThemedText>
          <View style={{flexDirection:"row", alignSelf:"center", gap:10}}>
            <Link href="https://www.linkedin.com/in/abuzaid55/"
              style={[
                style.apps_button,
                {
                  borderColor:
                    theme === "dark" ? Colors.dark.text : Colors.light.text,
                },
              ]}
            >
              <Ionicons
                color={theme === "dark" ? Colors.dark.text : Colors.light.text}
                name="logo-linkedin"
                size={50}
              />
            </Link>
            <Link href="https://github.com/AbuZaid55"
              style={[
                style.apps_button,
                {
                  borderColor:
                    theme === "dark" ? Colors.dark.text : Colors.light.text,
                },
              ]}
            >
              <Ionicons
                color={theme === "dark" ? Colors.dark.text : Colors.light.text}
                name="logo-github"
                size={50}
              />
            </Link>
          </View>
        </View>

        <View style={{ marginHorizontal: 22, marginTop: 25 }}>
          <ThemedText
            style={{ fontSize: 30, fontWeight: "600", lineHeight: 35 }}
          >
            About
          </ThemedText>
          <View>
            <Pressable
              onPress={() => router.push("/(nobottomtabs)/accountinfo")}
            >
              <ThemedText
                style={{ fontWeight: "500", marginVertical: 10, fontSize: 18 }}
              >
                Account
              </ThemedText>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(nobottomtabs)/privacy_policy")}
            >
              <ThemedText
                style={{ fontWeight: "500", marginVertical: 10, fontSize: 18 }}
              >
                Privacy Policy
              </ThemedText>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(nobottomtabs)/terms_of_service")}
            >
              <ThemedText
                style={{ fontWeight: "500", marginVertical: 10, fontSize: 18 }}
              >
                Terms of Service
              </ThemedText>
            </Pressable>
            <Pressable onPress={() => router.push("/(nobottomtabs)/licenses")}>
              <ThemedText
                style={{ fontWeight: "500", marginVertical: 10, fontSize: 18 }}
              >
                Licenses
              </ThemedText>
            </Pressable>
            <Pressable onPress={() => router.push("/(nobottomtabs)/version")}>
              <ThemedText
                style={{ fontWeight: "500", marginVertical: 10, fontSize: 18 }}
              >
                Version (v1.0.4)
              </ThemedText>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(nobottomtabs)/disclaimer")}
            >
              <ThemedText
                style={{ fontWeight: "500", marginVertical: 10, fontSize: 18 }}
              >
                Disclaimer
              </ThemedText>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
      </ScrollView>
    </ThemedView>
  );
}

const ThemeButton = ({
  title,
  colorScheme,
  selected,
  onClick,
}: {
  title: string;
  colorScheme: Theme;
  selected: boolean;
  onClick: (theme: Theme) => void;
}) => {
  const theme = useColorScheme();

  const isDark = theme === "dark";

  return (
    <Pressable
      onPress={() => {
        onClick(colorScheme);
      }}
      style={[
        style.themebutton,
        {
          backgroundColor: selected
            ? isDark
              ? Colors.light.background
              : Colors.dark.background
            : isDark
            ? Colors.dark.background
            : Colors.light.background,

          borderColor: selected
            ? isDark
              ? Colors.light.text
              : Colors.dark.text
            : isDark
            ? Colors.dark.text
            : Colors.light.text,
        },
      ]}
    >
      <ThemedText
        style={{
          color: selected
            ? isDark
              ? Colors.dark.background
              : Colors.light.background
            : isDark
            ? Colors.dark.text
            : Colors.light.text,
          fontWeight: selected ? "700" : "500",
        }}
      >
        {title}
      </ThemedText>
    </Pressable>
  );
};

const style = StyleSheet.create({
  signin_button: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 90,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1.5,
  },
  apps_button: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    padding:2,
    borderRadius: 8,
    borderWidth: 1.5,
  },
  themebutton: {
    borderWidth: 1.5,
    flex: 1,
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
  },
});
