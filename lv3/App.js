import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import NumberGuessingGame from './components/NumberGuessingGame';
import Author from './components/Author';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Author />
      </Card>
      <Card>
        <NumberGuessingGame />
      </Card>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'top',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#005081',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18, //18
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
