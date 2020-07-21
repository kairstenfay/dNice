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
  const twirl = useRef(new Animated.Value(0)).current

  const startSpring = () => (
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start()
  )

  const startTwirl = () => (
    Animated.timing(twirl, {
      toValue: 360,
    }).start(({ finished }) => {
      twirl.resetAnimation()
      props.onRelease()
    }
  ))


  const rotateInterpolate = twirl.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  })

  const animatedStyles = {
    transform: [{rotate: rotateInterpolate }]
  }

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: pan.x,
          dy: pan.y
        },
      ]),
      onPanResponderRelease: () => {
        Animated.sequence([
          startSpring(),
          startTwirl()
        ])
      }
    })
  ).current

  return (
    <Animated.View
        style={[pan.getLayout(), animatedStyles]}
        {...panResponder.panHandlers}
        >
          <View style={styles.dieContainer}>
            <Die dimensions={props.dimensions} />
          </View>
    </Animated.View>
  )
}
