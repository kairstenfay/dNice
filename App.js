import React, { useRef, useState } from 'react';
import {
  Animated,
  Image,
  PanResponder,
  Text,
  TextInput,
  View,
} from 'react-native';
import { styles } from './components/styles'
import RollButton from './components/RollButton'


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

const UserControls = (props) => {
  return (
    <>
      <View style={styles.dimensionContainer}>
        <Text style={styles.displayText}>
          Rolling d{props.dimensions}
        </Text>
      </View>
      <View>
        <Text>
          Modify:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={text => props.setDimensions(text)}
          defaultValue={props.dimensions.toString()}
          keyboardType='number-pad'
          />
      </View>
    </>
  )
}

const DraggableDie = (props) => {
  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y },
      ], {}),
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start(
          ({ finished }) => props.setResult(rollDie(props.dimensions))
        )
      }
    })
  ).current

  return (
    <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
        >
          <View style={styles.dieContainer}>
            <Die dimensions={props.dimensions} />
          </View>
    </Animated.View>
  )
}

function Roll() {
  const [dimensions, setDimensions] = useState('20')
  const [result, setResult] = useState()

  return (
    <View>
      <UserControls dimensions={dimensions} setDimensions={setDimensions} />
      <DraggableDie dimensions={dimensions} setResult={setResult} />
      <RollButton onPress={() => setResult(rollDie(dimensions))} />
      <View style={styles.resultContainer}>
        <Text style={styles.displayText}>
          {result ? `You rolled ${result}!` : null }
        </Text>
      </View>
    </View>
  )
}


/**
 * Returns the value of a rolled die of given *n* dimensions.
 */
function rollDie(dimensions) {
  return Math.floor(Math.random() * dimensions) + 1
}


export default function App() {
  return (
    <View style={styles.container}>
      <Roll />
    </View>
  );
}
