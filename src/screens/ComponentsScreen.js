import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const yourname = 'John';

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {yourname}</Text>
    </View>
  )
  }

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  subHeaderStyle: {
    fontSize: 60
  }
});

export default ComponentsScreen;