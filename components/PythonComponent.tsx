import { StyleSheet, View, Image, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import Animated from "react-native-reanimated";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

const TOOLS = [
  { name: "PYTHON", icon: require("@/assets/images/python.png") },
  { name: "PANDAS", icon: require("@/assets/images/pandas.png") },
  { name: "NUMPY", icon: require("@/assets/images/numpy.png") },
  { name: "FAST.AI", icon: require("@/assets/images/fast.png") },
  { name: "GOOGLE\nCOLLAB", icon: require("@/assets/images/googlecol.png") },
  { name: "SCIKIT\n-LEARN", icon: require("@/assets/images/scikit.png") },
];
export function PythonComponent() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={styles.mainImageContainer}>
          <Animated.Image
            source={require("@/assets/images/ai.gif")}
            style={styles.mainImage}
            sharedTransitionTag="cardImage"
          />
          <Image
            source={require("@/assets/images/level1.png")}
            style={styles.levelBadge}
          />
        </View>

        <View style={styles.textContent}>
          <Animated.Text style={styles.title} sharedTransitionTag="cardTitle">
            intro to coding with ai python 🤖
          </Animated.Text>
          <Animated.Text
            style={styles.description}
            sharedTransitionTag="cardDescription"
          >
            learn Python basics and dive into AI. Build practical ai apps, get
            hands-on with ml models and grow into ai engineering!
          </Animated.Text>
        </View>

        <View style={styles.toolsSection}>
          <View style={styles.dashedBorder} />
          <View style={styles.toolsHeader}>
            <Image
              source={require("@/assets/images/tap.png")}
              style={styles.toolsIcon}
            />
            <ThemedText style={styles.toolsTitle}>TOOLS COVERED (7)</ThemedText>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.toolsList}
          >
            {TOOLS.map((tool, index) => (
              <View key={index} style={styles.toolItem}>
                <Image source={tool.icon} style={styles.toolIcon} />
                <ThemedText style={styles.toolName}>{tool.name}</ThemedText>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.levelSection}>
          <View style={styles.dashedBorder} />
          <ThemedText style={styles.startingTitle}>
            let's choose your starting point for this track ⛳️
          </ThemedText>
          <View style={styles.levelRow}>
            <MaterialIcons name="check" size={20} color="#00FF9D" />
            <ThemedText style={styles.levelAssigned}>
              you're assigned sub-skill{" "}
              <Entypo name="bar-graph" size={24} color="yellow" />{" "}
              <ThemedText style={styles.levelHighlight}>LEVEL 3 </ThemedText>
              {"\n"}based on your skills
            </ThemedText>
          </View>
          <View style={styles.levelRow}>
            <MaterialIcons name="check" size={20} color="#00FF9D" />
            <ThemedText style={styles.levelChange}>
              you can change levels if you wish!
            </ThemedText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    flex: 1,
  },
  mainImageContainer: {
    width: "100%",
    height: 250,
    position: "relative",
    marginBottom: 24,
  },
  mainImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  levelBadge: {
    position: "absolute",
    right: 2,
    top: 3,
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  textContent: {
    marginBottom: 32,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: "#FCF2D0",
    fontFamily: "CircularBook",
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    color: "#888888",
    lineHeight: 24,
    fontFamily: "CircularLight",
  },
  toolsSection: {
    paddingVertical: 32,
    position: "relative",
  },
  dashedBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#333333",
  },
  toolsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginLeft: 24,
  },
  toolsIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  toolsTitle: {
    color: "#A3A3A3",
    fontSize: 16,
    fontFamily: "CircularBook",
    letterSpacing: 1,
  },
  toolsList: {
    flexDirection: "row",
    marginLeft: 20,
    paddingRight: 20,
  },
  toolItem: {
    alignItems: "center",
    marginRight: 25,
  },
  toolIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
    resizeMode: "contain",
  },
  toolName: {
    color: "#A3A3A3",
    fontSize: 12,
    fontFamily: "CircularBook",
    textAlign: "center",
  },
  startingTitle: {
    fontSize: 24,
    color: "#888888",
    fontFamily: "CircularBook",
    marginBottom: 2,
    marginHorizontal: 24,
    lineHeight: 30,
  },
  levelSection: {
    paddingTop: 32,
    gap: 16,
  },
  levelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginHorizontal: 24,
  },
  levelAssigned: {
    fontSize: 16,
    color: "#888888",
  },
  levelHighlight: {
    color: "#FFE81A",
  },
  levelChange: {
    fontSize: 16,
    color: "#888888",
  },
});
