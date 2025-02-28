import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MusicProvider } from './src/constants/music';
import MusicPlayer from './src/components/MusicPlayer';

import StartScreen from './src/screens/StartScreen';
import EncyclopediaScreen from './src/screens/EncyclopediaScreen';
import LuresScreen from './src/screens/LuresScreen';
import SeasonsScreen from './src/screens/SeasonsScreen';
import ReadFishScreen from './src/screens/ReadFishScreen';
import ReadLuresScreen from './src/screens/ReadLuresScreen';
import ReadSeasonsScreen from './src/screens/ReadSeasonsScreen';
import CatchScreen from './src/screens/CatchScreen';
import AddCatchScreen from './src/screens/AddCatchScreen';
import SettingsScreen from './src/screens/SettingsScreen';

enableScreens();

const Stack = createStackNavigator();

const App = () => {

  return (
      <MusicProvider>
            <MusicPlayer />
                  <NavigationContainer>
                  <Stack.Navigator initialRouteName={"StartScreen" }>
                        <Stack.Screen 
                              name="StartScreen" 
                              component={StartScreen} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="EncyclopediaScreen" 
                              component={EncyclopediaScreen} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="LuresScreen" 
                              component={LuresScreen} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="SeasonsScreen" 
                              component={SeasonsScreen} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="ReadFishScreen" 
                              component={ReadFishScreen} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="ReadLuresScreen" 
                              component={ReadLuresScreen} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="ReadSeasonsScreen" 
                              component={ReadSeasonsScreen} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="CatchScreen" 
                              component={CatchScreen} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="AddCatchScreen" 
                              component={AddCatchScreen} 
                              options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                              name="SettingsScreen" 
                              component={SettingsScreen} 
                              options={{ headerShown: false }} 
                        />
                  </Stack.Navigator>
                  </NavigationContainer>
      </MusicProvider>
    );
};

export default App;
