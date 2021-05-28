const fs = require('fs')
const path = require('path')

module.exports = function(dirpath, filetype, callback) {
  fs.readdir(dirpath, (err, files) => {
    if (err) return callback(err)

    const ext = `.${filetype}`
    filtered = files.filter(file => path.extname(file) == ext)
    callback(null, filtered)
  })
}
