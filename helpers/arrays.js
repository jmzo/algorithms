const checkArguments = require('backseat-driver').checkArguments

function generateIntegerArray (lowerLimit, upperLimit, arraySize) {
  checkArguments({
    lowerLimit: ['number'],
    upperLimit: ['number'],
    arraySize:  ['number']
  }).log()

  // Cast to integers.
  lowerLimit = parseInt(lowerLimit)
  upperLimit = parseInt(upperLimit)
  arraySize = parseInt(arraySize)

  // Make sure neither have resolved to NaN.
  let absOfSum = Math.abs(lowerLimit + upperLimit + arraySize)
  if (absOfSum !== absOfSum) {
    console.error('arguments must each be a number.')
    return
  }

  // Make sure lowerLimit is less than or equal to upperLimit.
  if (lowerLimit > upperLimit) {
    console.error('lowerLimit argument must be less than or equal to upperLimit.')
    return
  }

  let array = []
  for (let i = 0; i < arraySize; i++) {
    let spanLength = upperLimit - lowerLimit
    let number = Math.floor(Math.random() * (spanLength + 1)) + lowerLimit
    array.push(number)
  }
  return array
}

/*
Consider using Fisher-Yates https://bost.ocks.org/mike/shuffle/
*/
function shuffleArray (array) {
  let shuffled = []
  while (array.length) {
    let index = Math.floor(Math.random() * array.length)
    shuffled.push(array[index])
    array.splice(index, 1)
  }
  return shuffled
}

module.exports = {
  generateIntegerArray,
  shuffleArray
}
