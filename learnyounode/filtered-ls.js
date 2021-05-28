const fs = require('fs')
const path = require('path')

const dirpath = process.argv[2]
const filetype = `.${process.argv[3]}`

fs.readdir(dirpath, (err, files) => {
  if (err) return err
  files.forEach(file => {
    if (path.extname(file) === filetype) console.log(file)
  })
})
