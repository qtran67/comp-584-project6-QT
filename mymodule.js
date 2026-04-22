// LESSON 6: MAKE IT MODULAR

// Load fs module
const fs = require('fs')
const path = require('path')

// Assign function directly to module.exports.
module.exports = function (dirPath, filterExt, callback) {
  fs.readdir(dirPath, function (err, files) {
    // If something went wrong, pass the error to the callback.
    if (err) {
      return callback(err)
    }

    // Filter files by extension and pass the result to the callback.
    const filtered = files.filter(file => path.extname(file) === '.' + filterExt)
    callback(null, filtered)
  })
}
