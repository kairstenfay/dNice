import React from 'react'
import {
    Text,
    TouchableOpacity,
} from 'react-native'
import { styles } from './styles'

export default function RollButton(props) {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.onPress()}
        >
        <Text style={styles.buttonText}>
          ROLL
        </Text>
      </TouchableOpacity>
    )
}
