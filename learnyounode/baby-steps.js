const numbers = process.argv.filter(arg => !isNaN(arg)).map(number => Number(number))

console.log(numbers.reduce((acc, number) => number + acc, 0))
