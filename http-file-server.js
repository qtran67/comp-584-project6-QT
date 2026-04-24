// LESSON 11: HTTP FILE SERVER

// Load http and fs modules
const http = require('http')
const fs = require('fs')

// Get port from command line
const port = parseInt(process.argv[2])
// Get path from command line
const filePath = process.argv[3]

const server = http.createServer(function (req, res) {
  // Create a readable stream for the file.
  const fileStream = fs.createReadStream(filePath)

  // .pipe() connects the file stream to the HTTP response.
  fileStream.pipe(res)
})

server.listen(port)
