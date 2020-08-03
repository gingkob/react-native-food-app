import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryItem = props => {

  return (
    <TouchableOpacity style={ styles.card } onPress={ props.onPress }>
      <View style={{backgroundColor:props.category.color}}>
        <Text style={styles.title}>{props.category.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    width: 150,
    height: 150,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden'
  },
  title: {
    padding: 15,
    backgroundColor: 'rgba(270,170,70,0.5)',
    fontFamily: 'heading',
    alignItems: 'flex-end',
    fontSize:22,
    textAlign: 'right',
    color: 'dark-gray'
  }
});

export default CategoryItem;