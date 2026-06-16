import ImageCarousel from "@/components/Carousel";
import DownloadPicture from "@/components/DownloadPicture";
import MasonryImageList from "@/components/MasonryImageList";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import useWallpaper, { WallpaperWithDetails } from "@/hooks/useWallpapers";
import { useState } from "react";
import { View, ScrollView, Image, StyleSheet, useColorScheme } from "react-native";

const HEADER_HEIGHT = 350;

export default function Explore() {
  const wallpapers = useWallpaper();
  const [selectedWallpaper,setSelectedWallpaper] = useState<null | WallpaperWithDetails>(null)
  const theme = useColorScheme()
  return (
    <View style={[styles.container,{backgroundColor: theme === "dark"? Colors.dark.textSecondary : "rgba(240,240,240)"}]}>
      <View style={styles.heroImage}>
        <ImageCarousel/>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: HEADER_HEIGHT - 40 }} />

        <ThemedView style={[styles.content]}>
          <View
            style={{
              width: 50,
              height: 5,
              backgroundColor: theme === "dark" ? Colors.dark.textSecondary : Colors.light.textSecondary,
              borderRadius: 999,
              alignSelf: "center",
              marginBottom: 20,
            }}
          />
          <MasonryImageList onClick={(wallpaper:WallpaperWithDetails) => setSelectedWallpaper(wallpaper)} wallpapers={wallpapers} />
        </ThemedView>
      </ScrollView>
      {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  heroImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: HEADER_HEIGHT,
  },

  content: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: 1000,
    padding: 20,
  }
});
