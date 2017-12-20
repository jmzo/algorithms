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
  findSumPairs
}