
/**
 * Returns the value of a rolled die of given *n* dimensions.
 */
const rollDie = (dimensions) => {
  return Math.floor(Math.random() * dimensions) + 1
}

export {
  rollDie,
}
