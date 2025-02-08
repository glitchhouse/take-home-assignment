import { Image, ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

const TOOLS = [
  { id: 'html', name: 'HTML', icon: require('@/assets/images/tools/html.png') },
  { id: 'css', name: 'CSS', icon: require('@/assets/images/tools/css.png') },
  { id: 'tailwind', name: 'Tailwind', icon: require('@/assets/images/tools/tailwind.png') },
  { id: 'react', name: 'React', icon: require('@/assets/images/tools/react.png') },
  { id: 'cursor', name: 'Cursor AI', icon: require('@/assets/images/tools/cursor.png') }
];

export function ToolsSection() {
  return (
    <ThemedView style={styles.toolsSection}>
      <ThemedView style={styles.titleContainer}>
        <Image 
          source={require('@/assets/images/tools_covered.png')}
          style={styles.toolsIcon}
        />
        <ThemedText style={styles.toolsTitle}>TOOLS COVERED (7)</ThemedText>
      </ThemedView>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.toolsScroll}
      >
        {TOOLS.map((tool) => (
          <ThemedView key={tool.id} style={styles.toolItem}>
            <Image source={tool.icon} style={styles.toolIcon} />
            <ThemedText style={styles.toolName}>{tool.name}</ThemedText>
          </ThemedView>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  toolsSection: {
    marginBottom: 32,
    backgroundColor: '#171717',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#171717',
  },
  toolsIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  toolsTitle: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'CircularMedium',
  },
  toolsScroll: {
    paddingRight: 20, // Extra padding for last item
  },
  toolItem: {
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: '#171717',
    padding: 12,
    borderRadius: 12,
    width: 80,
  },
  toolIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  toolName: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'CircularBook',
    textAlign: 'center',
  },
}); 