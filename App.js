import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#444',
    margin: 20,
    padding: 10,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 2,
  },

  dimensionContainer: {
    alignItems: 'center',
  },

  displayText: {
    fontSize: 18,
  },

  resultContainer: {
    alignItems: 'center',
    padding: 50,
  }
})

function Roll() {
  const [dimensions] = useState(20)
  const [result, setResult] = useState()

  return (
    <View>
      <View style={styles.dimensionContainer}>
        <Text style={styles.displayText}>
          Rolling d{dimensions}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setResult(Math.floor(Math.random() * dimensions) + 1)
        }}
        >
        <Text style={styles.buttonText}>
          ROLL
        </Text>
      </TouchableOpacity>
      <View style={styles.resultContainer}>
        <Text style={styles.displayText}>
          {result ? `You rolled ${result}!` : null }
        </Text>
      </View>
    </View>
  )
}



export default function App() {
  return (
    <View style={styles.container}>
      <Roll />
    </View>
  );
}
