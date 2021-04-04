import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function NumberGuessingGame() {
  return (
    <View>
      <Text style={styles.paragraph}>Djordja Markovic</Text>
      <Text style={styles.date}>20210324</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 10,
    fontSize: 18, //18
    fontWeight: 'bold',
    textAlign: 'right',
  },
  date: {
    margin: 10,
    fontSize: 10, //18
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
