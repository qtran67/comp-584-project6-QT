// LESSON 7: HTTP CLIENT

// Load http module
const http = require('http')

// Get url from command line
const url = process.argv[2]

// http.get() sends a GET request
http.get(url, function (response) {
  // This makes the 'data' event give us readable text.
  response.setEncoding('utf8')

  // Listen for 'data' events 
  response.on('data', function (chunk) {
    console.log(chunk)
  })

  // Check for error events.
  response.on('error', console.error)
})
