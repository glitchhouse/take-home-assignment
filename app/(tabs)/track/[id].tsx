import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, ScrollView, View, Pressable, Dimensions, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ToolsSection } from '@/components/ToolsSection';
import Animated, { 
  withTiming,
  Easing,
  useAnimatedStyle,
  
} from 'react-native-reanimated';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/app/(tabs)/_layout';
import { SharedElement } from 'react-navigation-shared-element';

const { width } = Dimensions.get('window');

type TrackDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'track/[id]'>;
};




export default function TrackDetailScreen({ route }: TrackDetailScreenProps) {
  const { id } = route.params;
  console.log('id', id);
  
  // Since id is passed as a prop, it is guaranteed to be defined.
  const [activeTrack, setActiveTrack] = useState<'web-dev' | 'ai-python'>(() => {
    const trackId = id.toLowerCase();
    return trackId.includes('ai') || trackId.includes('python') ? 'ai-python' : 'web-dev';
  });   

  // Optionally, update activeTrack if id changes while the component is mounted.
  useEffect(() => {
    const trackId = id.toLowerCase();
    if (trackId.includes('ai') || trackId.includes('python')) {
      setActiveTrack('ai-python');
    } else {
      setActiveTrack('web-dev');
    }
  }, [id]);

  const isWebTrack = activeTrack === 'web-dev';

  const webContentStyle = useAnimatedStyle(() => ({
    transform: [{
      translateX: withTiming(isWebTrack ? 0 : -width, {
        duration: 300,
        easing: Easing.inOut(Easing.cubic),
      })
    }],
    position: 'absolute',
    width: '100%',
  }));

  const aiContentStyle = useAnimatedStyle(() => ({
    transform: [{
      translateX: withTiming(isWebTrack ? width : 0, {
        duration: 300,
        easing: Easing.inOut(Easing.cubic),
      })
    }],
    position: 'absolute',
    width: '100%',
  }));

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerBackTitle: 'BACK',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#171717',
          },
        }} 
      />
      
      {/* Track Selector */}
      <ThemedView style={[styles.trackSelector, { backgroundColor: '#171717' }]}>
        <Pressable 
          onPress={() => setActiveTrack('web-dev')}
          style={({ pressed }) => [styles.tabButton, pressed && { opacity: 0.7 }]}
        >
          <ThemedText style={[styles.trackOption, isWebTrack && styles.activeTrack]}>
            INTRO TO WEB DEV
          </ThemedText>
        </Pressable>
        <View style={styles.divider} />
        <Pressable 
          onPress={() => setActiveTrack('ai-python')}
          style={({ pressed }) => [styles.tabButton, pressed && { opacity: 0.7 }]}
        >
          <ThemedText style={[styles.trackOption, !isWebTrack && styles.activeTrack]}>
            INTRO TO AI PYTHON
          </ThemedText>
        </Pressable>
      </ThemedView>
      
      {/* Content Container */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.animatedContentWrapper}>
            <Animated.View style={webContentStyle}>
              <View style={styles.content}>
                <View style={styles.imageWrapper}>
                  <SharedElement id={`item.${id}.photo`} >
                    <Animated.View style={styles.imageContainer}>
                      <Animated.Image
                        source={require('@/assets/images/web-dev-track.gif')}
                        style={styles.trackImage}
                        resizeMode="cover"
                      />
                    </Animated.View>
                  </SharedElement>
                  <View style={styles.levelBadge}>
                    <Image 
                      source={require('@/assets/images/level.png')} 
                      style={styles.levelImage}
                    />
                  </View>
                </View>
                <SharedElement id={`item.${id}.title`}>
                  <Animated.Text style={styles.title}>
                    intro to coding with web dev 🌐
                  </Animated.Text>
                </SharedElement>
                <SharedElement id={`item.${id}.description`}>
                  <ThemedText style={styles.description}>
                    start building websites with html & css, the building blocks that power the web. grow into full-stack coding!
                  </ThemedText>
                </SharedElement>
                <ToolsSection />
                <ThemedText style={styles.startTitle}>
                  let's choose your starting point{'\n'}for this track ⛳
                </ThemedText>
                <ThemedView style={styles.checklistContainer}>
                  <ThemedView style={styles.checkItem}>
                    <ThemedText style={styles.checkmark}>✓</ThemedText>
                    <ThemedText style={styles.checkText}>
                      You are assigned sub-skill ⚡️ LEVEL 3
                    </ThemedText>
                  </ThemedView>
                  <ThemedView style={styles.checkItem}>
                    <ThemedText style={styles.checkmark}>✓</ThemedText>
                    <ThemedText style={styles.checkText}>
                      You can change levels if you wish!
                    </ThemedText>
                  </ThemedView>
                </ThemedView>
              </View>
            </Animated.View>
            <Animated.View style={aiContentStyle}>
              <View style={styles.content}>
                <View style={styles.imageWrapper}>
                  <SharedElement id={`item.${id}.photo`}>
                    <Animated.View style={styles.imageContainer}>
                      <Animated.Image
                        source={require('@/assets/images/ai-track.gif')}
                        style={styles.trackImage}
                        resizeMode="cover"
                      />
                    </Animated.View>
                  </SharedElement>
                  <View style={styles.levelBadge}>
                    <Image 
                      source={require('@/assets/images/level.png')} 
                      style={styles.levelImage}
                    />
                  </View>
                </View>
                <SharedElement id={`item.${id}.title`}>
                  <Animated.Text style={styles.title}>
                    intro to coding with ai python 🤖
                  </Animated.Text>
                </SharedElement>
                <SharedElement id={`item.${id}.description`}>
                  <ThemedText style={styles.description}>
                    learn python basics and dive into ai. build practical ai apps, get hands-on with ml models and grow into ai engineering!
                  </ThemedText>
                </SharedElement>
                <ToolsSection />
                <ThemedText style={styles.startTitle}>
                  let's choose your starting point{'\n'}for this track ⛳
                </ThemedText>
                <ThemedView style={styles.checklistContainer}>
                  <ThemedView style={styles.checkItem}>
                    <ThemedText style={styles.checkmark}>✓</ThemedText>
                    <ThemedText style={styles.checkText}>
                      You are assigned sub-skill ⚡️ LEVEL 3
                    </ThemedText>
                  </ThemedView>
                  <ThemedView style={styles.checkItem}>
                    <ThemedText style={styles.checkmark}>✓</ThemedText>
                    <ThemedText style={styles.checkText}>
                      You can change levels if you wish!
                    </ThemedText>
                  </ThemedView>
                </ThemedView>
              </View>
            </Animated.View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  scrollView: {
    flex: 1,
  },
  trackSelector: {
    flexDirection: 'row',
    marginTop: 60,
    paddingTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: '#171717',
    gap: 10,
  },
  tabButton: {
    flex: 1,
  },
  trackOption: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'CooperHewittMedium',
    textAlign: 'center',
    paddingBottom: 8,
  },
  activeTrack: {
    color: '#00FF9D',
    borderBottomWidth: 2,
    borderBottomColor: '#00FF9D',
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: '#333',
    alignSelf: 'center',
  },
  scrollContentContainer: {
    minHeight: '100%',
    position: 'relative',
    marginTop: 0,
  },
  contentContainer: {
    minHeight: '100%',
    position: 'relative',
    marginTop: 0,
  },
  animatedContentWrapper: {
    position: 'relative',
    width: '100%',
  },
  content: {
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#171717',
  },
  trackImage: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'CircularBook',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#888',
    fontFamily: 'CircularBook',
    lineHeight: 24,
    marginBottom: 32,
  },
  startTitle: {
    fontSize: 24,
    color: '#999',
    fontFamily: 'CircularBook',
    marginBottom: 24,
  },
  checklistContainer: {
    backgroundColor: '#171717',
    padding: 10,
    borderRadius: 12,
    marginBottom: 16,
  },
  checkItem: {
    flexDirection: 'row',
    backgroundColor: '#171717',
    alignItems: 'flex-start',
    gap: 12,
  },
  checkmark: {
    color: '#00FF9D',
    fontSize: 18,
    marginTop: 2,
  },
  checkText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'CircularBook',
    flex: 1,
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 30,
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  levelBadge: {
    position: 'absolute',
    right: 12,
    top: 12,
    alignItems: 'center',
    zIndex: 10,
  },
  levelText: {
    color: '#00FF9D',
    fontSize: 16,
    fontFamily: 'NTBrickSans',
    marginBottom: 4,
  },
  levelImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
}); 