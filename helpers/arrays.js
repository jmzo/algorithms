function generateIntegerArray (lowerLimit, upperLimit, arraySize) {
  let result = checkArguments(arguments, [
    ['lowerLimit', 'number'],
    ['upperLimit', 'number'],
    ['arraySize',  'number']
  ])

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
Inspired by React's Prop Validation
*/
function checkArguments () {
  let caller = arguments.caller || checkArguments.caller
  let msgs = []
  let argsToValidate = arguments[0]
  let validators = arguments[1]
  for (let i = 0; i < validators.length; i++) {
    if (typeof argsToValidate[i] !== validators[i][1] ) msgs.push(`Argument '${validators[i][0]}' of function '${caller.name}' must be of type '${validators[i][1]}'.`)
  }
  if (msgs.length) console.warn(JSON.stringify(msgs, null, 4))
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
