import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen.jsx';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
