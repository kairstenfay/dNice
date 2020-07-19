import React, { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { styles } from './components/styles'
import { rollDie } from './utils'
import DraggableDie from './components/DraggableDie'
import RollButton from './components/RollButton'
import UserControls from './components/UserControls'


function Roll() {
  const [dimensions, setDimensions] = useState('20')
  const [result, setResult] = useState()

  return (
    <View>
      <UserControls dimensions={dimensions} setDimensions={setDimensions} />
      <DraggableDie
        dimensions={dimensions}
        onRelease={() => setResult(rollDie(dimensions))}
        />
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
