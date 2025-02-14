import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useState } from "react";
import { WebComponent } from "@/components/WebComponent";
import { PythonComponent } from "@/components/PythonComponent";

const TABS = [
  { label: "INTRO TO\nWEB DEV", component: WebComponent },
  { label: "INTRO TO\nAI PYTHON", component: PythonComponent },
];

export default function Detail() {
  const { activeIndex } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState(Number(activeIndex) || 0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <MaterialIcons name="chevron-left" size={30} color="#888" />
          <ThemedText style={styles.backText}>BACK</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        {TABS.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, activeTab === index && styles.activeTab]}
            onPress={() => setActiveTab(index)}
          >
            <ThemedText
              style={[
                styles.tabText,
                { color: activeTab === index ? "#00FF9D" : "#888" },
              ]}
            >
              {tab.label}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.tabIndicator}>
        <Animated.View
          style={[
            styles.indicator,
            {
              transform: [
                {
                  translateX: activeTab * (Dimensions.get("window").width / 2),
                },
              ],
            },
          ]}
        />
      </View>

      <View style={styles.contentContainer}>
        {TABS.map((tab, index) => {
          const animatedStyle = useAnimatedStyle(() => ({
            opacity: withTiming(activeTab === index ? 1 : 0, { duration: 300 }),
            transform: [
              {
                translateX: withTiming(
                  activeTab === index ? 0 : index < activeTab ? -50 : 50,
                  { duration: 300 }
                ),
              },
            ],
            position: activeTab === index ? "relative" : "absolute",
            width: "100%",
            height: "100%",
          }));

          return (
            <Animated.View key={index} style={animatedStyle}>
              <tab.component />
            </Animated.View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000" },
  header: { backgroundColor: "#000" },
  backButton: { flexDirection: "row", alignItems: "center" },
  backText: { color: "#888", fontSize: 17 },
  tabBar: { flexDirection: "row", height: 80, backgroundColor: "#000" },
  tab: { flex: 1, justifyContent: "center", alignItems: "center" },
  activeTab: { borderBottomColor: "#00FF9D" },
  tabText: { fontSize: 15, fontFamily: "CircularBook", textAlign: "center" },
  tabIndicator: { height: 2, backgroundColor: "#333" },
  indicator: {
    width: Dimensions.get("window").width / 2,
    height: 2,
    backgroundColor: "#00FF9D",
  },
  contentContainer: { flex: 1, position: "relative", overflow: "hidden" },
});
