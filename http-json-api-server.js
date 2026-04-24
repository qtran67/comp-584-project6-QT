// LESSON 13: HTTP JSON API SERVER

// Load http module
const http = require('http')

// Get port from command line
const port = parseInt(process.argv[2])

const server = http.createServer(function (req, res) {
  // Parse url into path and parameters
  const parsedUrl = new URL(req.url, 'http://localhost')

  // Extract the 'iso' query parameter
  const isoString = parsedUrl.searchParams.get('iso')

  // Parse the string into a Date object
  const date = new Date(isoString)

  let result

  // Check which endpoint was requested
  if (parsedUrl.pathname === '/api/parsetime') {
    // Return the time broken into hour/minute/second components
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
  } else if (parsedUrl.pathname === '/api/unixtime') {
    // Return Unix time
    result = {
      unixtime: date.getTime()
    }
  } else {
    // Unknown route
    res.writeHead(404)
    return res.end('Not found')
  }

  // Send the JSON response with the correct Content-Type header.
  res.writeHead(200, { 'Content-Type': 'application/json' })

  // JSON.stringify() converts to a JSON string for sending.
  res.end(JSON.stringify(result))
})

server.listen(port)
