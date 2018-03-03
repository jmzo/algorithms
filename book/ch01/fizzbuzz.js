module.exports = (input) => {
  let output = input.map((i) => {
    if (typeof i !== 'number') return i
    let newValue = ''
    if (i % 3 === 0) newValue = newValue + 'Fizz'
    if (i % 5 === 0) newValue = newValue + 'Buzz'
    return (newValue ? newValue : i)
  })
  return output
}
