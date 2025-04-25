import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import Animated, { Layout } from "react-native-reanimated";

interface CardProps {
  title: string;
  description: string;
  emoji: string;
  imageSource: any;
  index: number;
  isLast?: boolean;
}

export function CardComponent({
  title,
  description,
  emoji,
  imageSource,
  index,
  isLast,
}: CardProps) {
  return (
    <Animated.View
      style={[styles.card, isLast ? styles.lastCard : {}]}
      sharedTransitionTag={`card-${index}`}
      layout={Layout.duration(300).springify()}
    >
      <View style={styles.imageContainer}>
        <Animated.Image
          source={imageSource}
          style={styles.cardImage}
          sharedTransitionTag={`cardImage-${index}`}
          resizeMode="cover"
        />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.cardTitleContainer}>
          <Animated.Text
            style={styles.cardTitle}
            sharedTransitionTag={`cardTitle-${index}`}
          >
            {title} {emoji}
          </Animated.Text>
        </View>
        <Animated.Text
          style={styles.cardDescription}
          sharedTransitionTag={`cardDescription-${index}`}
        >
          {description}
        </Animated.Text>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() =>
            router.push({
              pathname: "/Detail",
              params: { activeIndex: index },
            })
          }
        >
          <ThemedText style={styles.viewButtonText}>
            VIEW TRACK DETAILS →
          </ThemedText>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 290,
    backgroundColor: "#111",
    overflow: "hidden",
    borderWidth: 0.4,
    borderColor: "#A3A3A3",
    marginLeft: 24,
    height: 465,
  },
  lastCard: {
    marginRight: 24,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 196,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cardContent: {
    padding: 20,
  },
  cardTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 3,
  },
  cardTitle: {
    fontSize: 24,
    color: "#FCF2D0",
    flex: 1,
    lineHeight: 28,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 16,
    color: "#888",
    marginBottom: 24,
    lineHeight: 24,
    fontFamily: "CircularLight",
  },
  viewButton: {
    borderWidth: 1,
    borderColor: "#A3A3A3",
    padding: 16,
    alignItems: "center",
  },
  viewButtonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "CircularBook",
    letterSpacing: 1,
  },
});
