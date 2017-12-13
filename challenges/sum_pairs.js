function solve (targetValue, lowerLimit, upperLimit, randomizeSet) {
  // Cast to integers.
  targetValue = parseInt(targetValue)
  lowerLimit = parseInt(lowerLimit)
  upperLimit = parseInt(upperLimit)
  
  // Make sure neither have resolved to NaN.
  let absOfSum = Math.abs(lowerLimit + upperLimit + targetValue)
  if (absOfSum !== absOfSum) {
    console.error('arguments must each be a number.')
    return
  }
  
  // Make sure lowerLimit is less than or equal to upperLimit.
  if (lowerLimit > upperLimit) {
    console.error('lowerLimit argument must be less than or equal to upperLimit.')
    return
  }
  
  let array = generateArray(lowerLimit, upperLimit, randomizeSet)
  let pairs = findSumPairs(targetValue, array)
  console.log(pairs)
}

function generateArray (lowerLimit, upperLimit, randomizeSet) {
  let array = []
  for (let i = lowerLimit; i <= upperLimit; i++) {
    array.push(i)
  }
  array = randomizeSet ? randomizeArray(array) : array
  return array
}

function randomizeArray (array) {
  let randomized = []
  while (array.length) {
    let index = Math.floor(Math.random() * array.length)
    randomized.push(array[index])
    array.splice(index, 1)
  }
  console.log('RANDOM', randomized)
  return randomized
}

function findSumPairs (targetValue, array) {
  let sumPairs = []
  let set = new Set()
  for (let i = 0; i < array.length; i++) {
    let operand = targetValue - array[i]
    if (set.has(operand)) sumPairs.push([operand, array[i]])
    set.add(array[i])
  }
  return sumPairs
}

module.exports = {
  solve
}