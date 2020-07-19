import React from 'react'
import {
    Image,
} from 'react-native'
import { styles } from './styles'

export default function Die(props) {
    // Image paths must be defined statically
    let icon
    switch (Number(props.dimensions)) {
      case 4:
        icon = require('../img/noun_d4.png')
        break
      case 6:
        icon = require('../img/noun_d6.png')
        break
      case 8:
        icon = require('../img/noun_d8.png')
        break
      case 10:
        icon = require('../img/noun_d10.png')
        break
      case 12:
        icon = require('../img/noun_d12.png')
        break
      case 20:
        icon = require('../img/noun_d20.png')
        break
      default:
        return null
    }

    return (
      <Image source={icon}
        style={styles.dieImage} />
    )
}
