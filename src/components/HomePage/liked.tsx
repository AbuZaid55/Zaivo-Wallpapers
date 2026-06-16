import { useLikedWallpaper, WallpaperWithDetails } from "@/hooks/useWallpapers";
import { ScrollView } from "react-native";
import MasonryImageList from "../MasonryImageList";
import { Dispatch, SetStateAction } from "react";
import { ThemedView } from "../themed-view";

export default function Liked({setSelectedWallpaper}:{setSelectedWallpaper:Dispatch<SetStateAction<WallpaperWithDetails | null>>}) {
  const wallpapers = useLikedWallpaper();
  return (
      <ThemedView style={{flex:1}}>
        <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: 20,
        }}
      >
        <MasonryImageList
          wallpapers={wallpapers}
          onClick={(wallpaper) => setSelectedWallpaper(wallpaper)}
        />
      </ScrollView>
      </ThemedView>
  );
}