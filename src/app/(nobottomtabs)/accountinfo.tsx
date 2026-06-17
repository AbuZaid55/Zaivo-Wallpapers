import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "react-native";
import { StyleSheet, View } from "react-native";

export default function AccountInfo() {
  const isDark = useColorScheme() === "dark";
  const colors = isDark ? Colors.dark : Colors.light;

  return (
    <ThemedView style={styles.container}>
      <View
        style={[
          styles.profileCard,
          {
            backgroundColor: colors.backgroundElement,
          },
        ]}
      >
        <View
          style={[
            styles.avatar,
            {
              backgroundColor: colors.backgroundSelected,
            },
          ]}
        >
          <ThemedText style={styles.avatarText}>XZ</ThemedText>
        </View>

        <ThemedText style={styles.name}>
          XYZ
        </ThemedText>

        <ThemedText
          style={[
            styles.secondaryText,
            {
              color: colors.textSecondary,
            },
          ]}
        >
          xyz@example.com
        </ThemedText>
      </View>

      <View
        style={[
          styles.section,
          {
            backgroundColor: colors.backgroundElement,
          },
        ]}
      >
        <ThemedText style={styles.sectionTitle}>
          Account Details
        </ThemedText>

        <InfoRow
          label="Username"
          value="xyz55"
          secondaryColor={colors.textSecondary}
        />

        <InfoRow
          label="Email"
          value="xyz@example.com"
          secondaryColor={colors.textSecondary}
        />

        <InfoRow
          label="Member Since"
          value="June 2026"
          secondaryColor={colors.textSecondary}
        />

        <InfoRow
          label="Theme"
          value={isDark ? "Dark" : "Light"}
          secondaryColor={colors.textSecondary}
        />
      </View>
    </ThemedView>
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
    padding: 16,
    gap: 20,
  },

  profileCard: {
    alignItems: "center",
    padding: 24,
    borderRadius: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 28,
    fontWeight: "700",
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
  },

  secondaryText: {
    fontSize: 14,
  },

  section: {
    borderRadius: 20,
    padding: 20,
    gap: 18,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
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