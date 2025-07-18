import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import { Search } from './components/Search';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


import HomeScreen from './pages/HomeScreen';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/colors';

export default function App() {
  
  return (
   <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}