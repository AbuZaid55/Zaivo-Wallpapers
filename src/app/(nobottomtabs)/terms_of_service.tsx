import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { ScrollView, StyleSheet, View, useColorScheme } from "react-native";

export default function TermsOfService() {
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
            title="Acceptance of Terms"
            text="By using this application, you agree to these Terms of Service. If you do not agree with these terms, please discontinue use of the application."
            colors={colors}
          />

          <Section
            title="Wallpaper Usage"
            text="Wallpapers provided through this application are intended for personal use on your devices. Users are responsible for ensuring that their use of downloaded content complies with applicable laws and any rights associated with the content."
            colors={colors}
          />

          <Section
            title="Downloads"
            text="The application allows users to download wallpapers to their devices. Downloaded wallpapers remain subject to any applicable ownership or licensing rights."
            colors={colors}
          />

          <Section
            title="Intellectual Property"
            text="All trademarks, logos, application designs, and related branding belong to their respective owners. Users may not copy, modify, distribute, or exploit application content except as permitted by law."
            colors={colors}
          />

          <Section
            title="Prohibited Activities"
            text="Users agree not to misuse the application, interfere with its operation, attempt unauthorized access, distribute malicious software, or use the service for unlawful purposes."
            colors={colors}
          />

          <Section
            title="Availability of Service"
            text="We may modify, suspend, or discontinue any part of the application at any time without prior notice. We do not guarantee uninterrupted availability of the service."
            colors={colors}
          />

          <Section
            title="Disclaimer"
            text="The application is provided on an 'as is' and 'as available' basis without warranties of any kind. We make no guarantees regarding the accuracy, reliability, or availability of the content."
            colors={colors}
          />

          <Section
            title="Limitation of Liability"
            text="To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of the application."
            colors={colors}
          />

          <Section
            title="Changes to These Terms"
            text="We reserve the right to update these Terms of Service at any time. Continued use of the application after changes become effective constitutes acceptance of the updated terms."
            colors={colors}
          />

          <Section
            title="Contact"
            text="If you have questions regarding these Terms of Service, please contact us through the support options provided within the application."
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