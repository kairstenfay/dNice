import React from 'react'
import {
    Text,
    TextInput,
    View,
} from 'react-native'
import { styles } from './styles'

export default function UserControls(props) {
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
