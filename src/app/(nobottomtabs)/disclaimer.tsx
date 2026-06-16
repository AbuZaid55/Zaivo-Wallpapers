import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { ScrollView, StyleSheet, View, useColorScheme } from "react-native";

export default function Disclaimer() {
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
          <ThemedText style={styles.title}>
            Disclaimer
          </ThemedText>

          <ThemedText
            style={[
              styles.description,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            This application is developed for educational, learning, and
            demonstration purposes. The content provided within the application
            is intended to showcase application features and user interface
            implementations.
          </ThemedText>

          <Section
            title="Educational Project"
            text="This application is a personal learning project. It is not intended to provide legal, professional, or official services."
            colors={colors}
          />

          <Section
            title="Informational Pages"
            text="The Privacy Policy, Terms of Service, Licenses, and other informational pages may contain sample or placeholder content used for development and demonstration purposes."
            colors={colors}
          />

          <Section
            title="Wallpaper Content"
            text="Wallpapers and images available through the application may belong to their respective owners. Users are responsible for ensuring their use of downloaded content complies with applicable laws and licensing requirements."
            colors={colors}
          />

          <Section
            title="No Warranties"
            text="The application is provided on an 'as is' basis without warranties of any kind. The developer makes no guarantees regarding accuracy, availability, reliability, or completeness of the content."
            colors={colors}
          />

          <Section
            title="Limitation of Liability"
            text="The developer shall not be held responsible for any direct, indirect, incidental, or consequential damages resulting from the use of this application."
            colors={colors}
          />

          <Section
            title="Acceptance"
            text="By using this application, you acknowledge that it is an educational project and agree to use it at your own discretion."
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
      <ThemedText style={styles.sectionTitle}>
        {title}
      </ThemedText>

      <ThemedText
        style={[
          styles.sectionText,
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

  title: {
    fontSize: 24,
    fontWeight: "700",
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
  },

  section: {
    gap: 8,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
  },

  sectionText: {
    fontSize: 14,
    lineHeight: 22,
  },
});