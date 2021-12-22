import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MOVIES from '../Arrays/MoviesArray';
import { SafeAreaView } from 'react-native-safe-area-context';


const renderMovie = ({ item }) => {
  return (
    <View>
      <ListItem
          title={item.title}
          subtitle={item.director}
          onPress={item.id}
          leftAvatar = {{ source: require('../images/shark.jpg')}}
        />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textColor}>Welcome!!</Text>
        <FlatList 
          data={MOVIES} 
          renderItem={renderMovie} 
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textColor: {
    color: 'teal',
  },
}); 