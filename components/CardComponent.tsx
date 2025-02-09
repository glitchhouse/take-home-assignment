import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

interface CardProps {
  title: string;
  description: string;
  emoji: string;
  imageSource: any;
}

export function CardComponent({ title, description, emoji, imageSource }: CardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image 
          source={imageSource}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.cardTitleContainer}>
          <ThemedText style={styles.cardTitle}>
            {title} {emoji}
          </ThemedText>
        </View>
        <ThemedText style={styles.cardDescription}>
          {description}
        </ThemedText>
        <TouchableOpacity style={styles.viewButton}>
          <ThemedText style={styles.viewButtonText}>VIEW TRACK DETAILS →</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 290,
    backgroundColor: '#111',
    overflow: 'hidden',
    borderWidth: 0.4,
    borderColor: '#A3A3A3',
    marginLeft:24,
    height:465
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 196,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 20,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 3,
  },
  cardTitle: {
    fontSize: 24,
    color: '#FCF2D0',
    flex: 1,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 16,
    color: '#888',
    marginBottom: 24,
    lineHeight: 24,
    fontFamily: 'CircularLight',
  },
  viewButton: {
    borderWidth: 1,
    borderColor: '#A3A3A3',
    padding: 16,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'CircularBook',
    letterSpacing: 1,
  },
});
