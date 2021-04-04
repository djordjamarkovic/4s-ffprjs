import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
//import Constants from 'expo-constants';

export default function NumberGuessingGame() {
  const [input, setInput] = useState();
  const [result, setResult] = useState();
  const [error, setError] = useState(false);
  const [random, setRandom] = useState(0);
  //const [loading, setLoading] = useState(false);

  const resetGame = () => {
    setRandom(Math.floor(Math.random() * 100 + 1));
    setResult('Geben Sie eine Zahl ein:');
    setInput('');
  };

  useEffect(resetGame, []);

  const handleButton = () => {
    // check number
    const number = parseInt(input);
    if (isNaN(number)) {
      setResult('Ungültige Eingabe.');
      setError(true);
    } else {
      setError(false);
      if (number > random) {
        setResult('Die gesuchte Zahl ist kleiner.');
      } else if (number < random) {
        setResult('Die gesuchte Zahl ist größer.');
      } else {
        setResult('Die Zahl wurde erraten.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Zahlenratespiel</Text>
      <TextInput
        style={styles.textInput}
        value={input}
        onChangeText={setInput}
        keyboardType={'number-pad'}
      />
      <Button title="Prüfen" onPress={handleButton} />
      <Text>{result}</Text>
      <Button title="Neues Spiel" onPress={resetGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  paragraph: {
    margin: 24,
    fontSize: 18, //18
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    fontSize: 32,
  },
});
