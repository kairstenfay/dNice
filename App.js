import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
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
    marginVertical: 50,
    padding: 20,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 2,
  },

  dimensionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  displayText: {
    fontSize: 18,
  },

  input: {
    paddingHorizontal: 10,
    borderColor: 'grey',
    borderWidth: 1
  },

  resultContainer: {
    alignItems: 'center',
  }
})

function Roll() {
  const [dimensions, setDimensions] = useState(20)
  const [result, setResult] = useState()

  return (
    <View>
      <View style={styles.dimensionContainer}>
        <Text style={styles.displayText}>
          Rolling d{dimensions}
        </Text>
        <View>
          <Text>
            Modify:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setDimensions(text)}
            defaultValue={dimensions.toString()}
            value={dimensions}
            keyboardType='number-pad'
            />
        </View>
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
