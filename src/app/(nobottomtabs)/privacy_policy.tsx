import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { ScrollView, StyleSheet, View, useColorScheme } from "react-native";

export default function PrivacyPolicy() {
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
          <Section
            title="Information We Collect"
            text="The app may collect basic device information and app usage analytics to improve performance and user experience. We do not collect personal information unless explicitly provided by you."
            colors={colors}
          />

          <Section
            title="Wallpaper Downloads"
            text="When you download wallpapers, images may be saved to your device storage or gallery. The app only accesses storage permissions required for this functionality."
            colors={colors}
          />

          <Section
            title="Third-Party Services"
            text="The application may use third-party services for analytics, crash reporting, or content delivery. These services may collect information according to their own privacy policies."
            colors={colors}
          />

          <Section
            title="Data Security"
            text="We take reasonable measures to protect information processed by the application. However, no method of electronic storage or transmission is completely secure."
            colors={colors}
          />

          <Section
            title="Children's Privacy"
            text="This application is not intended for children under 13 years of age. We do not knowingly collect personal information from children."
            colors={colors}
          />

          <Section
            title="Changes to This Policy"
            text="This privacy policy may be updated from time to time. Continued use of the application after updates constitutes acceptance of the revised policy."
            colors={colors}
          />

          <Section
            title="Contact Us"
            text="If you have questions regarding this privacy policy, please contact us through the support options available in the application."
            colors={colors}
          />
        </View>
      </ScrollView>
    </ThemedView>
  );
}

function Section({
  title,
  text,
  colors,
}: {
  title: string;
  text: string;
  colors: any;
}) {
  return (
    <View style={styles.section}>
      <ThemedText style={styles.title}>{title}</ThemedText>

      <ThemedText
        style={[
          styles.description,
          {
            color: colors.textSecondary,
          },
        ]}
      >
        {text}
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
    gap: 24,
  },

  section: {
    gap: 8,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
  },
});