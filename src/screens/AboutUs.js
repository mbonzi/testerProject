import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function AboutUs() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textColor}>About Us:</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textColor: {
    color: 'green',
  },

}); 