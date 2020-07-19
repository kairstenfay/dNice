import React from 'react'
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { styles } from './styles'


const DiceBag = (props) => {
    // Per React docs, Image paths must be defined statically
    const icons = {
        4: require('../img/noun_d4.png'),
        6: require('../img/noun_d6.png'),
        8: require('../img/noun_d8.png'),
        10: require('../img/noun_d10.png'),
        12: require('../img/noun_d12.png'),
        20: require('../img/noun_d20.png'),
    }

    return (
        <View>
            { Object.keys(icons).map(d =>
                <TouchableOpacity
                    onPress={() => props.setDimensions(d)}
                    >
                    <Image key={d}
                        source={icons[d]}
                        style={styles.miniDieImage}
                        />
                </TouchableOpacity>
            )}
        </View>
    )
}

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
        <DiceBag setDimensions={props.setDimensions} />
      </>
    )
  }
