import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Weather from './components/Weather';

export default function App() {

  return (
    <View >
      <Weather zipCode="90110" />
      <StatusBar style="auto" />
    </View>
  );
}