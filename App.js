import React, { useRef, useState } from 'react';
import {
  Animated,
  PanResponder,
  Text,
  View,
} from 'react-native';
import { styles } from './components/styles'
import Die from './components/Die'
import RollButton from './components/RollButton'
import UserControls from './components/UserControls'


/**
 * Returns the string of the value of a rolled die of given *n* dimensions.
 */
function rollDie(dimensions) {
  return (Math.floor(Math.random() * dimensions) + 1).toString()
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



export default function App() {
  return (
    <View style={styles.container}>
      <Roll />
    </View>
  );
}
