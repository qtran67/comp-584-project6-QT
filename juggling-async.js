// LESSON 9: JUGGLING ASYNC

// Load http module
const http = require('http')

// Get the three URLs from command line arguments
const urls = [process.argv[2], process.argv[3], process.argv[4]]

// array to store results
const results = new Array(3)

// Count how many requests have completed
let completed = 0

// Fetch URL and store the result at the given index
function fetchUrl(index) {
  http.get(urls[index], function (response) {
    // Collect chunks using plain stream events
    const chunks = []

    response.on('data', function (chunk) {
      chunks.push(chunk)
    })

    response.on('end', function () {
      // Store this result in the slot matching its original index
      results[index] = Buffer.concat(chunks).toString()
      completed++

      // print after ALL three requests are done
      if (completed === 3) {
        results.forEach(result => console.log(result))
      }
    })

    response.on('error', console.error)
  })
}

// Call all three requests simultaneously
fetchUrl(0)
fetchUrl(1)
fetchUrl(2)
