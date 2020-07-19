import React, { useRef } from 'react'
import {
    Animated,
    PanResponder,
    View,
} from 'react-native'
import { styles } from './styles'
import Die from './Die'

export default function DraggableDie(props) {
  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y },
      ], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan,
          {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start(
            ({ finished }) => props.onRelease()
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
