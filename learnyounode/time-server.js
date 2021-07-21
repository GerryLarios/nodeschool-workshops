const net = require('net')
const port = Number(process.argv[2])

const zeroFill = number => {
  return (number < 10 ? '0' : '') + number 
}

const now = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = zeroFill(date.getMonth() + 1)
  const day = zeroFill(date.getDate())
  const hours = zeroFill(date.getHours())
  const mins = zeroFill(date.getMinutes())
  return `${year}-${month}-${day} ${hours}:${mins}`
}

const server = net.createServer(socket => {
  socket.end(now() + '\n')
})

server.listen(port)
