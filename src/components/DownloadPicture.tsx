import { WallpaperWithDetails } from "@/hooks/useWallpapers";
import { Ionicons } from '@expo/vector-icons';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { Image, Pressable, StyleSheet, useColorScheme, View } from "react-native";
import { ThemedView } from "./themed-view";
import { Colors } from "@/constants/theme";
import { ThemedText } from "./themed-text";

const DownloadPicture = ({ wallpaper, onClose }: { wallpaper: WallpaperWithDetails, onClose: () => void }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme()
  const iconColor = theme === "dark" ? Colors.dark.text: Colors.light.text
  return (
    <BottomSheet
      ref={bottomSheetRef}
      onClose={onClose}
      snapPoints={["93%"]}
      enablePanDownToClose={true}
      enableDynamicSizing={false}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
      backgroundStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}

    >
      <BottomSheetView style={{ width: '100%', height: "100%" }}>
        <ThemedView style={{flex:1, borderTopLeftRadius:15, borderTopRightRadius:15}}>
          <Image style={{ width: '100%', height: "60%", borderRadius: 15 }} source={{ uri: wallpaper.url }} />
          <View style={style.icon_container}>
            <Ionicons onPress={() => bottomSheetRef.current?.close()} style={style.icon} name="close" size={23} />
            <View style={style.icon_innter_container}>
              <Ionicons style={style.icon} name={wallpaper.liked ? "heart" : "heart-outline"} size={23} />
              <Ionicons style={style.icon} name="download-outline" size={23} />
            </View>
          </View>
          <ThemedText style={{ fontSize: 25, fontWeight: '700', alignSelf: "center", padding: 10 }}>{wallpaper.name}</ThemedText>
          <Pressable style={[style.download_button, {borderColor: theme === "dark"? Colors.dark.text: Colors.light.text}]}>
            <Ionicons
              style={{ color: 'white', marginRight: 6 }}
              name="download-outline"
              size={23}
            />
            <ThemedText style={{ color: 'white' }}>Get Wallpaper</ThemedText>
          </Pressable>
          <View style={{ marginLeft: 30, marginTop: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <View style={{ position: "relative", alignSelf: "flex-start" }}>
                <Image style={{ width: 50, height: 50, borderRadius: 999 }} source={require('@/assets/images/profile_icon/profile.png')} />
                <Ionicons name="add" style={style.add_icon} />
              </View>
              <ThemedText style={{ fontWeight: "600", fontSize: 20 }}>Abu Zaid</ThemedText>
            </View>
            <View style={style.list}>
              <Ionicons color={iconColor} name={wallpaper.device?.toLowerCase() === "desktop" ? "desktop-outline" : "phone-portrait-outline"} size={15} />
              <ThemedText>{wallpaper.device.charAt(0).toUpperCase() + wallpaper.device.slice(1)}</ThemedText>
            </View>
            <View style={style.list}>
              <Ionicons color={iconColor} name="list-outline" size={15} />
              <ThemedText>3D, Abstract</ThemedText>
            </View>
            <View style={style.list}>
              <Ionicons color={iconColor} name="image-outline" size={15} />
              <ThemedText>{wallpaper.width} X {wallpaper.height}</ThemedText>
            </View>
            <View style={style.list}>
              <Ionicons color={iconColor} name="shield-checkmark-outline" size={15} />
              <ThemedText>Copyright 2026</ThemedText>
            </View>
          </View>
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
};

const style = StyleSheet.create({
  icon_container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 10
  },
  icon_innter_container: {
    flexDirection: "row",
    gap: 5
  },
  icon: {
    backgroundColor: "#00000035",
    borderRadius: 999,
    padding: 5,
    color:"white"
  },
  download_button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 90,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth:2
  },
  add_icon: {
    position: "absolute",
    bottom: 3,
    right: 0,
    backgroundColor: "red",
    color: "white",
    borderRadius: 999,
    borderColor: "white",
    borderWidth: 2
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  }
})

export default DownloadPicture;
