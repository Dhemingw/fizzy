function fizzy(num) {
  // if num is divisible by 3 return 'Fizz'
  if (num % 3 === 0) {
    return 'Fizz'
  }
  if (num % 5 === 0) {
    return 'Buzz'
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'
  }
}

module.exports = {
  fizzy,
}




