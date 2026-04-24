// LESSON 12: HTTP UPPERCASERER

// Load http module
const http = require('http')

// Load through2-map module
const map = require('through2-map')

// Get port from command line
const port = parseInt(process.argv[2])

const server = http.createServer(function (req, res) {
  // Only handle POST requests
  if (req.method !== 'POST') {
    return res.end('Send a POST request.\n')
  }

  // Pipe the request body through our transform, then into the response.
  req.pipe(
    map(function (chunk) {
      // We convert it to a string then call .toUpperCase() on it.
      return chunk.toString().toUpperCase()
    })
  ).pipe(res)
})

server.listen(port)
