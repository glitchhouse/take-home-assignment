import { NavigationContainer, DefaultTheme, DarkTheme, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from './index';
import TrackDetailScreen from './track/[id]';

// Define your navigation types
export type RootStackParamList = {
  Home: undefined;
  Tabs: undefined;
  'track/[id]': { id: string };
};

export type TabParamList = {
  Home: undefined;
  
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();


export default function Navigation() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name="track/[id]"
        component={TrackDetailScreen}
        options={({ route }: { route: RouteProp<RootStackParamList, 'track/[id]'> }) => ({
          animation: 'fade',
          freezeOnBlur: true,
          sharedElements: (route: RouteProp<RootStackParamList, 'track/[id]'>, otherRoute: any, showing: boolean) => {
            const { id } = route.params;
            return [
              { id: `item.${id}.photo` },
              { id: `item.${id}.title` },
              { id: `item.${id}.description` },
            ];
          },
        })}
      />
    </Stack.Navigator>
  );
}

