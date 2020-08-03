import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailsScreen = props => {
  return (
  <View style={styles.screen}>
    <Text>Meal details screen!</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default MealDetailsScreen;