import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardComponent } from "@/components/CardComponent";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <ThemedText style={styles.title}>pick your track</ThemedText>
              <ThemedText style={styles.subtitle}>time to build 🚀</ThemedText>
            </View>
            <View style={styles.levelContainer}>
              <ThemedText style={styles.techText}>tech</ThemedText>
              <View style={styles.badgeContainer}>
                <Image
                  source={require("@/assets/images/level1.png")}
                  style={styles.levelImage}
                />
                <View style={styles.badgeTextContainer}>
                  <ThemedText style={styles.badgeText}>LEVEL</ThemedText>
                  <ThemedText style={styles.badgeNumber}>1</ThemedText>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.checkContainer}>
            <View style={styles.checkLine}>
              <ThemedText style={styles.checkmark}>✓</ThemedText>
              <ThemedText style={styles.checkText}>
                switch or add tracks anytime as you grow
              </ThemedText>
            </View>
            <View style={styles.checkLine}>
              <ThemedText style={styles.checkmark}>✓</ThemedText>
              <ThemedText style={styles.checkText}>
                complete your track to unlock new skills and projects!
              </ThemedText>
            </View>
          </View>

          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.cardContainer}
          >
            {[
              {
                title: "intro to coding with web dev",
                description:
                  "start building websites with html & css, the building blocks that power the web. grow into full-stack coding!",
                emoji: "🌐",
                imageSource: require("@/assets/images/webDev.gif"),
              },
              {
                title: "intro to coding with ai python",
                description:
                  "learn python basics and dive into ai.build practical ai apps, get hands-on with ml models and grow into ai engineering!",
                emoji: "🤖",
                imageSource: require("@/assets/images/ai.gif"),
              },
            ].map((card, index, array) => (
              <CardComponent
                key={index}
                title={card.title}
                description={card.description}
                emoji={card.emoji}
                imageSource={card.imageSource}
                index={index}
                isLast={index === array.length - 1}
              />
            ))}
          </ScrollView>

          <View style={styles.lineContainer}>
            <View style={[styles.line, styles.activeLine]} />
            <View style={[styles.line]} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,

    marginTop: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    marginHorizontal: 24,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "NTBrickSans",
    letterSpacing: 0,
  },
  subtitle: {
    fontSize: 20,
    color: "#FFE81A",
    marginTop: 8,
    fontFamily: "NTBrickSans",
  },
  levelContainer: {
    alignItems: "center",
    marginLeft: 14,
  },
  techText: {
    color: "#00FF9D",
    fontSize: 20,
    fontFamily: "NTBrickSans",
    marginBottom: 4,
    letterSpacing: 1,
    textShadowColor: "#E073DA",
    textShadowOffset: {
      width: 0,
      height: 1.75,
    },
    textShadowRadius: 0,
  },
  badgeContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  levelImage: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
  badgeTextContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: "18%",
    top: "3%",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  badgeNumber: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    top: -9,
  },
  checkContainer: {
    marginBottom: 25,
    gap: 16,
    marginHorizontal: 24,
  },
  checkLine: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  checkmark: {
    color: "#00FF9D",
    fontSize: 18,
    fontFamily: "CircularBook",
  },
  checkText: {
    color: "#AAAAAA",
    fontSize: 16,
    flex: 1,
    lineHeight: 24,
    fontFamily: "CircularLight",
  },
  cardContainer: {
    flexGrow: 0,
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 30,
    width: 104,
    height: 2,
    alignSelf: "center",
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#333",
  },
  activeLine: {
    backgroundColor: "#fff",
  },
});
