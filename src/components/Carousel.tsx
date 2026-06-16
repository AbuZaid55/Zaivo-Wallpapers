import React, { useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  ViewToken,
} from "react-native";

const { width } = Dimensions.get("window");

const DATA = [
  {
    id: "1",
    title: "Moonlit Mountains",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "2",
    title: "Forest Rays",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "3",
    title: "Urban Heights",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "4",
    title: "Neon Void",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "5",
    title: "Neural Dream",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1080&q=80",
  },
];

export default function ImageCarousel() {
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentIndex === DATA.length - 1 ? 0 : currentIndex + 1;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  return (
    <View style={{ position: "relative" }}>
      <FlatList
        ref={flatListRef}
        data={DATA}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
        )}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {DATA.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    width,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    bottom: 65,
    alignSelf: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "900",
    color: "#FFF",
    letterSpacing: 2,
    textAlign: "center",

    textShadowColor: "rgba(255,255,255,0.3)",
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 12,
  },

  pagination: {
    position: "absolute",
    bottom: 55,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#B0B4BA",
    marginHorizontal: 5,
  },

  activeDot: {
    backgroundColor: "#ffffff",
  },
});
