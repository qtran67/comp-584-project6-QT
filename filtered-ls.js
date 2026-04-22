// LESSON 5: FILTERED LS

// Load fs module
const fs = require('fs')

const path = require('path')

// Get directory path and extension to filter by
const dirPath = process.argv[2]
const filterExt = process.argv[3]

// fs.readdir() asynchronously reads a directory's contents.
fs.readdir(dirPath, function (err, files) {
  if (err) {
    return console.error(err)
  }

  // Filter the list with files matching the extension.
  files
    .filter(file => path.extname(file) === '.' + filterExt)
    .forEach(file => console.log(file))
})
