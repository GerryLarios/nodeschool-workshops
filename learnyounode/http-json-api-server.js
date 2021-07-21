const http = require('http')
const url = require('url')

const port = Number(process.argv[2])

const parseTime = time => ({
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds()
})

const unixtime = time => ({
  unixtime: time.getTime()
})

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true)
  const time = new Date(parsed.query.iso)

  let result
  if (/^\/api\/parsetime/.test(req.url)) {
    result = parseTime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json'  })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(port)
