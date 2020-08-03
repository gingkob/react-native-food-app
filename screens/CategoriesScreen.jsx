import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CategoryItem from '../components/CategoryItem'

import Categories from '../models/Category'

const CategoriesScreen = props => {
  
  const renderItem = data => {
    return <CategoryItem category={data.item} onPress={ () =>  props.navigation.navigate({ routeName: 'CategoryMeals' }) } />
  }

  return (
    <FlatList data={Categories} renderItem={renderItem} numColumns={2} />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'heading',
    fontSize: 24
  }
});

export default CategoriesScreen;