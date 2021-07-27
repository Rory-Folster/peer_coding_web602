const test = require('./test')

const fs = require('fs')

fs.writeFileSync('myNotes.txt', 'Hello World!')

fs.appendFileSync('myNotes.txt', '\nHello again')

// test();

test();