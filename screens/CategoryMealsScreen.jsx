import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {
  return (
  <View style={styles.screen}>
    <Text>Categoriey Meals screen!</Text>
    <Button title="go further" onPress={() => {
      props.navigation.navigate('MealDetails')
    }} />
    <Button title='go back' onPress={() => {
      props.navigation.goBack();
    }} />
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

export default CategoryMealsScreen;