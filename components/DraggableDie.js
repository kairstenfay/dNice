import React, { useRef, useEffect } from 'react'
import {
    Animated,
    PanResponder,
} from 'react-native'
import Die from './Die'

export default function DraggableDie(props) {
  const pan = useRef(new Animated.ValueXY()).current
  const twirl = useRef(new Animated.Value(0)).current

  /* Because Animated objects mount before JavaScript is run, Animated objects
  won't detect updates in state. Therefore, use this hack to listen for when an
  animation reaches the end (value 360) before triggering the state reading
  function via a callback */
  const twirlListenerId = () => twirl.addListener((dimensions) => {
    if (dimensions.value === 360) {
      props.onRelease()
    }})

  useEffect(() => { twirlListenerId() }, [twirlListenerId])

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
        <Die dimensions={props.dimensions} />
    </Animated.View>
  )
}
