import React, { useState } from 'react';
import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigator from './navigation/MealsNavigator';
import CategoriesScreen from './screens/CategoriesScreen';

const fetchFonts = () => {
  return Fonts.loadAsync({
    'heading': require('./assets/fonts/DancingScript-Regular.ttf'),
    'text': require('./assets/fonts/Roboto-Light.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} />
  }

  return <MealsNavigator />
}
