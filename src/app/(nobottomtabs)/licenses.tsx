import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { ScrollView, StyleSheet, View, useColorScheme } from "react-native";

export default function Licenses() {
  const isDark = useColorScheme() === "dark";
  const colors = isDark ? Colors.dark : Colors.light;

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.backgroundElement,
            },
          ]}
        >
          <ThemedText style={styles.pageTitle}>
            Open Source Licenses
          </ThemedText>

          <ThemedText
            style={[
              styles.description,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            This application uses open-source software and third-party
            libraries. We thank the developers and contributors of these
            projects.
          </ThemedText>

          <LicenseItem
            name="React"
            license="MIT License"
            colors={colors}
          />

          <LicenseItem
            name="React Native"
            license="MIT License"
            colors={colors}
          />

          <LicenseItem
            name="Expo"
            license="MIT License"
            colors={colors}
          />

          <LicenseItem
            name="Expo Router"
            license="MIT License"
            colors={colors}
          />

          <LicenseItem
            name="React Native Reanimated"
            license="MIT License"
            colors={colors}
          />

          <LicenseItem
            name="React Native Gesture Handler"
            license="MIT License"
            colors={colors}
          />

          <LicenseItem
            name="@gorhom/bottom-sheet"
            license="MIT License"
            colors={colors}
          />

          <LicenseItem
            name="Async Storage"
            license="MIT License"
            colors={colors}
          />

          <LicenseItem
            name="Moment.js"
            license="MIT License"
            colors={colors}
          />

          <View
            style={[
              styles.notice,
              {
                backgroundColor: colors.backgroundSelected,
              },
            ]}
          >
            <ThemedText
              style={{
                color: colors.textSecondary,
              }}
            >
              Full license texts and copyright notices remain the property
              of their respective authors and copyright holders.
            </ThemedText>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

function LicenseItem({
  name,
  license,
  colors,
}: {
  name: string;
  license: string;
  colors: any;
}) {
  return (
    <View style={styles.item}>
      <ThemedText style={styles.packageName}>
        {name}
      </ThemedText>

      <ThemedText
        style={[
          styles.license,
          {
            color: colors.textSecondary,
          },
        ]}
      >
        {license}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 16,
  },

  card: {
    borderRadius: 20,
    padding: 20,
    gap: 20,
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: "700",
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
  },

  item: {
    gap: 4,
  },

  packageName: {
    fontSize: 16,
    fontWeight: "600",
  },

  license: {
    fontSize: 14,
  },

  notice: {
    marginTop: 8,
    padding: 16,
    borderRadius: 12,
  },
});