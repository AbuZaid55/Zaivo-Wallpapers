import MasonryList from "@react-native-seoul/masonry-list";
import { Image, Text, View, StyleSheet, Pressable, useColorScheme } from "react-native";
import { WallpaperWithDetails } from "@/hooks/useWallpapers";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/theme";

export default function MasonryImageList({
  wallpapers,
  onClick
}: {
  wallpapers: WallpaperWithDetails[];
  onClick: (wallpaper:WallpaperWithDetails) => void
}) {
  const theme = useColorScheme()
  return (
    <MasonryList
      style={{ margin: -10 }}
      data={wallpapers}
      numColumns={2}
      keyExtractor={(item) => item.url}
      renderItem={({ item }: { item: any }) => (
        <Pressable onPress={()=> onClick(item)} style={{ margin: 10, position: 'relative', borderRadius:12 , backgroundColor: theme==="dark"? Colors.dark.textSecondary : 'rgba(240,240,240)' }}>
            <View style={style.name_container}>
                <Text style={{color:"white"}}>{item.name}</Text>
                <FontAwesome name={item.liked ? "heart" : "heart-o"} color="white" size={16}/>
            </View>
          <Image
            source={{ uri: item.url }}
            style={{
              width: "100%",
              aspectRatio: item.width / item.height,
              borderRadius: 12,
            }}
          />
        </Pressable>
      )}
    />
  );
}

const style = StyleSheet.create({
    name_container:{
        position:'absolute',
        bottom:0,
        left:0,
        zIndex:2,
        width:'100%',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        padding:10,
        backgroundColor:"rgba(0,0,0,0.5)",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})