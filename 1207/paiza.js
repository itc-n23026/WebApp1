const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split('\n')
const [a, b] = lines

print(lines.at(0))
print(a, b)
