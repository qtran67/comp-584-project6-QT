// LESSON 3: MY FIRST I/O! (Synchronous)

// Load fs module
const fs = require('fs')

// Get file path from command-line argument
const filePath = process.argv[2]

// readFileSync() reads the file into a buffer.
const contents = fs.readFileSync(filePath, 'utf8')

// Count new lines by splitting on '\n'.
const lineCount = contents.split('\n').length - 1

console.log(lineCount)
