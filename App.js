import React, { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { styles } from './components/styles'
import { rollDie } from './utils'
import DraggableDie from './components/DraggableDie'
import Result from './components/Result'
import RollButton from './components/RollButton'
import UserControls from './components/UserControls'


function Roll() {
  const [dimensions, setDimensions] = useState('20')
  const [result, setResult] = useState()

  return (
    <View style={styles.app}>
      <UserControls dimensions={dimensions} setDimensions={setDimensions} />
      <DraggableDie
        dimensions={dimensions}
        onRelease={() => setResult(rollDie(dimensions))}
        />
      <Result result={result} />
      <RollButton onPress={() => setResult(rollDie(dimensions))} />
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
