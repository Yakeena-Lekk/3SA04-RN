import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './components/ZipCodeScreen';
import WeatherScreen from './components/WeatherScreen';

const Stack = createStackNavigator();

export default function App() {

  return (        
    <NavigationContainer>
    
      <Stack.Navigator >
        <Stack.Screen style= {styles.font} name="Home" component={ZipCodeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator> 

    </NavigationContainer>       
  );
}

const styles = StyleSheet.create({
  font:{
    fontSize : 50,
  }
});