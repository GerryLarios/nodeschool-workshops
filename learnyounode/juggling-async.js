const http = require('http')
const args = [...process.argv]
const urls = args.slice(2)

const request = url => {
  return new Promise((resolve, reject) => {
    const req = http.get(url)
    let body = ''
    req.on('response', res => {
      res.on('data', data => body += data)
      res.on('end', () => resolve(body))
    })
    req.on('error', err => reject(err))
  })
}

try {
  const requests = Promise.all(urls.map(request))
  requests.then(responses => {
    responses.forEach(res => console.log(res))
  })
} catch {
  console.log('Something went wrong!')
}
