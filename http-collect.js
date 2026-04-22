// LESSON 8: HTTP COLLECT

// Load http module
const http = require('http')

const url = process.argv[2]

http.get(url, function (response) {
  // Accumulator
  const chunks = []

  // Each data event gives us a buffer chunk
  response.on('data', function (chunk) {
    chunks.push(chunk)
  })

  // Now we can combine and print everything.
  response.on('end', function () {
    const body = Buffer.concat(chunks).toString()

    // Print the total character count then the full body
    console.log(body.length)
    console.log(body)
  })

  response.on('error', console.error)
})
