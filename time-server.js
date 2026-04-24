// LESSON 10: TIME SERVER

// Load net module
const net = require('net')

// Helper function pad with 0
function pad(n) {
  return String(n).padStart(2, '0')
}

// Format a Date object as "YYYY-MM-DD hh:mm"
function formatDate(date) {
  //getMonth() is 0-indexed (Jan = 0), so we add 1
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

// The callback is called every time a client connects.
const server = net.createServer(function (socket) {
  // Write the current time string to the client, followed by a newline.
  socket.end(formatDate(new Date()) + '\n')
})

// Start listening on the port provided
server.listen(parseInt(process.argv[2]))
