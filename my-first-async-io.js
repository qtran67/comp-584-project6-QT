// LESSON 4: MY FIRST ASYNC I/O!

// Load fs module
const fs = require('fs')

// Get file path from command-line argument
const filePath = process.argv[2]

// fs.readFile() starts reading the file asynchronously
fs.readFile(filePath, 'utf8', function (err, contents) {
  // Check for errors
  if (err) {
    return console.error(err)
  }

  // Count new lines.
  const lineCount = contents.split('\n').length - 1
  console.log(lineCount)
})

// Code here would run BEFORE the callback above (because async)!
