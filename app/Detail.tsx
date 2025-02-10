import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import Animated, { 
  useAnimatedStyle, 
  withTiming,
  withSpring,
  interpolate,
  useSharedValue,
} from 'react-native-reanimated';
import { useState, useEffect } from 'react';
import { WebDevContent } from '@/components/WebDevContent';
import { AIPythonContent } from '@/components/AIPythonContent';

export default function Detail() {
  const { activeIndex } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState(Number(activeIndex) || 0);
  
  const expandProgress = useSharedValue(0);

  useEffect(() => {
    expandProgress.value = withSpring(1, {
      mass: 0.5,
      damping: 15,
      stiffness: 100,
    });
  }, []);

  const webDevStyle = useAnimatedStyle(() => ({
    flex: 1,
    opacity: withTiming(activeTab === 0 ? 1 : 0, { duration: 100 }),
    transform: [{ 
      translateX: withTiming(activeTab === 0 ? 0 : -50, { duration: 300 }) 
    }],
    position: activeTab === 0 ? 'relative' : 'absolute',
    width: '100%',
    height: '100%',
  }));

  const aiStyle = useAnimatedStyle(() => ({
    flex: 1,
    opacity: withTiming(activeTab === 1 ? 1 : 0, { duration: 300 }),
    transform: [{ 
      translateX: withTiming(activeTab === 1 ? 0 : 50, { duration: 300 }) 
    }],
    position: activeTab === 1 ? 'relative' : 'absolute',
    width: '100%',
    height: '100%',
  }));

  const expandStyle = useAnimatedStyle(() => {
    return {
      flex: 1,
      transform: [
        { scale: interpolate(
            expandProgress.value,
            [0, 1],
            [0.97, 1],
          )
        },
        { 
          translateY: interpolate(
            expandProgress.value,
            [0, 1],
            [100, 0],
          )
        }
      ],
      opacity: expandProgress.value,
    };
  });

  const handleBack = async () => {
    expandProgress.value = withSpring(0, {
      mass: 0.5,
      damping: 15,
      stiffness: 100,
    });
    
    setTimeout(() => {
      router.back();
    }, 150);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={handleBack} 
          style={styles.backButton}
        >
          <MaterialIcons name="chevron-left" size={30} color="#888888" />
          <ThemedText style={styles.backText}>BACK</ThemedText>
        </TouchableOpacity>
      </View>
      
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 0 && styles.activeTab]}
          onPress={() => setActiveTab(0)}
        >
          <ThemedText 
            style={[
              styles.tabText, 
              { color: activeTab === 0 ? '#00FF9D' : '#888888' }
            ]}
          >
            INTRO TO{'\n'}WEB DEV
          </ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 1 && styles.activeTab]}
          onPress={() => setActiveTab(1)}
        >
          <ThemedText 
            style={[styles.tabText, { color: activeTab === 1 ? '#00FF9D' : '#888888' }]}
          >
            INTRO TO{'\n'}AI PYTHON
          </ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.tabIndicator}>
        <View 
          style={[
            styles.indicator, 
            { transform: [{ translateX: activeTab * (Dimensions.get('window').width / 2) }] }
          ]} 
        />
      </View>

      <Animated.View style={[styles.expandedCard, expandStyle]}>
        <View style={styles.contentContainer}>
          <Animated.View style={webDevStyle}>
            <WebDevContent />
          </Animated.View>
          <Animated.View style={aiStyle}>
            <AIPythonContent />
          </Animated.View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#000',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#888888',
    fontSize: 17,
  },
  tabBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#000',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomColor: '#00FF9D',
  },
  tabText: {
    fontSize: 15,
    fontFamily: 'CircularBook',
    textAlign: 'center',
  },
  tabIndicator: {
    height: 2,
    backgroundColor: '#333',
  },
  indicator: {
    width: Dimensions.get('window').width / 2,
    height: 2,
    backgroundColor: '#00FF9D',
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  expandedCard: {
    flex: 1,
    backgroundColor: '#000',
  },
});
