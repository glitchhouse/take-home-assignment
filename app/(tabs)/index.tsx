import { StyleSheet, ScrollView, View, Image, Dimensions, ImageBackground } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TrackCard } from '@/components/TrackCard';
import Animated, { 
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate
} from 'react-native-reanimated';
import { useState } from 'react';

export default function HomeScreen({}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useSharedValue(0);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    scrollX.value = offsetX;
    const newIndex = Math.round(offsetX / (width + 16)); // 16 is the gap
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  console.log('HomeScreen rendering');
  
  return (
    <ImageBackground 
      source={require('@/assets/images/background_pattern.png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.header}>
          <ThemedText style={styles.title}>pick your track</ThemedText>
          <ThemedView style={styles.subtitleContainer}>
            <ThemedText style={styles.subtitle}>time to build</ThemedText>
            <ThemedText style={styles.rocketEmoji}>🚀</ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.techBadge}>
            <ThemedText style={styles.techText}>tech</ThemedText>
            <Image 
              source={require('@/assets/images/level.png')} 
              style={styles.levelImage}
            />
          </ThemedView>

          <ThemedView style={styles.checklistContainer}>
            <ThemedView style={styles.checkItem}>
              <ThemedText style={styles.checkmark}>✓</ThemedText>
              <ThemedText style={styles.checkText}>switch or add tracks anytime as you grow</ThemedText>
            </ThemedView>
            <ThemedView style={styles.checkItem}>
              <ThemedText style={styles.checkmark}>✓</ThemedText>
              <ThemedText style={styles.checkText}>complete your track to unlock new skills and projects!</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardsScrollContainer}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          pagingEnabled
          snapToInterval={width + 16} // Card width + gap
          decelerationRate="fast"
        >
          <View style={styles.cardWrapper}>
            <TrackCard
              title="web dev"
              emoji="🌐"
              description="start building websites with html & css, the building blocks that power the web. grow into full-stack coding!"
              image={require('@/assets/images/web-dev-track.gif')}
              href="(tabs)/track/web-dev"
            />
          </View>
          <View style={styles.cardWrapper}>
            <TrackCard
              title="ai python"
              emoji="🤖"
              description="learn python basics and dive into ai. build practical ai apps, get hands-on with ml models and grow into ai engineering!"
              image={require('@/assets/images/ai-track.gif')}
              href="(tabs)/track/ai-python"
            />
          </View>
        </ScrollView>

        {/* Sliding Indicators */}
        <ThemedView style={styles.indicatorContainer}>
          {[0, 1].map((index) => (
            <Animated.View
              key={index}
              style={[
                styles.indicator,
                index === activeIndex && styles.activeIndicator,
              ]}
            />
          ))}
        </ThemedView>
      </ScrollView>
    </ImageBackground>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    fontFamily: 'NTBrickSans',
    color: '#fff',
    letterSpacing: 0.5,
    lineHeight: 34,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -4,
    backgroundColor: 'transparent',
  },
  subtitle: {
    fontSize: 22,
    fontFamily: 'NTBrickSans',
    color: '#FFD700',
    letterSpacing: 0.5,
    lineHeight: 34,
  },
  rocketEmoji: {
    fontSize: 18,
    marginLeft: 4,
  },
  techBadge: {
    position: 'absolute',
    right: 20,
    top: 60,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  techText: {
    color: '#00FF9D',
    fontSize: 20,
    fontFamily: 'NTBrickSans',
    marginBottom: 4,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  levelImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  checklistContainer: {
    marginTop: 70,
    gap: 12,
    backgroundColor: 'transparent',
    marginBottom: 32,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  checkmark: {
    color: '#00FF9D',
    fontSize: 18,
    marginRight: 12,
    marginTop: -2,
  },
  checkText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 18,
    fontFamily: 'CircularLight',
    flex: 1,
    lineHeight: 20,
  },
  cardsScrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 16,
    minHeight: 520,
  },
  cardWrapper: {
    height: 500,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    paddingBottom: 20,
    backgroundColor: 'transparent',
  },
  indicator: {
    width: 12,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  activeIndicator: {
    backgroundColor: '#fff',
    width: 24,
  },
});
