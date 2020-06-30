import React, { useState } from 'react';
import {
  Image,
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
    backgroundColor: 'ghostwhite',
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

  dieContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },

  dieImage: {
    width: 100,
    height: 110,
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

function Die(props) {
  // Image paths must be defined statically
  let icon
  switch (Number(props.dimensions)) {
    case 4:
      icon = require('./img/noun_d4.png')
      break
    case 6:
      icon = require('./img/noun_d6.png')
      break
    case 8:
      icon = require('./img/noun_d8.png')
      break
    case 10:
      icon = require('./img/noun_d10.png')
      break
    case 12:
      icon = require('./img/noun_d12.png')
      break
    case 20:
      icon = require('./img/noun_d20.png')
      break
    default:
      return null
  }

  return (
    <Image source={icon}
      style={styles.dieImage} />
  )
}


function Roll() {
  const [dimensions, setDimensions] = useState('20')
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
      <View style={styles.dieContainer}>
        <Die dimensions={dimensions} />
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
