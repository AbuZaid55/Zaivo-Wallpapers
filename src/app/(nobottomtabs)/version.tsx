import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { ScrollView, StyleSheet, View, useColorScheme } from "react-native";

export default function VersionInfo() {
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
            styles.versionCard,
            {
              backgroundColor: colors.backgroundElement,
            },
          ]}
        >
          <ThemedText style={styles.versionTitle}>
            Wallpaper App
          </ThemedText>

          <ThemedText
            style={[
              styles.versionNumber,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            Version 1.0.4
          </ThemedText>
        </View>

        <View
          style={[
            styles.releaseCard,
            {
              backgroundColor: colors.backgroundElement,
            },
          ]}
        >
          <ThemedText style={styles.sectionTitle}>
            What's New
          </ThemedText>

          <ReleaseItem text="Improved wallpaper loading performance." />
          <ReleaseItem text="Enhanced dark mode support." />
          <ReleaseItem text="Better image caching for smoother browsing." />
          <ReleaseItem text="Fixed minor UI and navigation issues." />
          <ReleaseItem text="Improved app stability and reliability." />
        </View>

        <View
          style={[
            styles.releaseCard,
            {
              backgroundColor: colors.backgroundElement,
            },
          ]}
        >
          <ThemedText style={styles.sectionTitle}>
            App Information
          </ThemedText>

          <InfoRow
            label="Version"
            value="1.0.4"
            secondaryColor={colors.textSecondary}
          />

          <InfoRow
            label="Platform"
            value="Android / iOS"
            secondaryColor={colors.textSecondary}
          />

          <InfoRow
            label="Release Type"
            value="Stable"
            secondaryColor={colors.textSecondary}
          />
        </View>
      </ScrollView>
    </ThemedView>
  );
}

function ReleaseItem({ text }: { text: string }) {
  return (
    <View style={styles.releaseItem}>
      <ThemedText style={styles.bullet}>•</ThemedText>
      <ThemedText style={styles.releaseText}>{text}</ThemedText>
    </View>
  );
}

function InfoRow({
  label,
  value,
  secondaryColor,
}: {
  label: string;
  value: string;
  secondaryColor: string;
}) {
  return (
    <View style={styles.row}>
      <ThemedText
        style={{
          color: secondaryColor,
        }}
      >
        {label}
      </ThemedText>

      <ThemedText style={styles.value}>
        {value}
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
    gap: 16,
  },

  versionCard: {
    padding: 24,
    borderRadius: 20,
    alignItems: "center",
  },

  versionTitle: {
    fontSize: 24,
    fontWeight: "700",
  },

  versionNumber: {
    marginTop: 6,
    fontSize: 16,
  },

  releaseCard: {
    borderRadius: 20,
    padding: 20,
    gap: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  releaseItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  bullet: {
    marginRight: 10,
    fontSize: 16,
  },

  releaseText: {
    flex: 1,
    lineHeight: 22,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  value: {
    fontWeight: "600",
  },
});