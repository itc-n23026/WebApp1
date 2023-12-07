const stream = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
const lines = stream.split('\n')

console.log(lines.at(0))
