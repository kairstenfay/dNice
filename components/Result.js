import React from 'react'
import {
    Text,
    View,
} from 'react-native'
import { styles } from './styles'

export default function Result(props) {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.displayText}>
        {props.result ? `You rolled ${props.result}!` : 'Roll a die' }
      </Text>
    </View>
  )
}
