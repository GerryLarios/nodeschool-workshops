const filterFiles = require('./mymodule.js')

const printFiles = (err, list) => {
  if (err) return console.error('There was an error', err)
  list.forEach(file => console.log(file))
}

filterFiles(process.argv[2], process.argv[3], printFiles)
