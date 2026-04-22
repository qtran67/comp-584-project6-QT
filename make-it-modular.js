// LESSON 6: MAKE IT MODULAR — make-it-modular.js

// Load custom module that exports a single function
const filterFiles = require('./mymodule')

const dirPath = process.argv[2]
const filterExt = process.argv[3]

// Call the module's function with a callback to handle the result.
filterFiles(dirPath, filterExt, function (err, files) {
  if (err) {
    return console.error('Error reading directory:', err)
  }

  // Print each matching filename per line
  files.forEach(file => console.log(file))
})
