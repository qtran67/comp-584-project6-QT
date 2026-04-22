// LESSON 2: BABY STEPS

// Use slice(2) to get index 2 and onward.
const args = process.argv.slice(2)

// Add up all the arguments.
// go through the array with reduce, accumulating a running total.
// Number(n) converts string arguments to a number.
const sum = args.reduce((total, n) => total + Number(n), 0)

console.log(sum)
