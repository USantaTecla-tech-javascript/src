const { Console } = require('console-mpds')

const console = new Console()

const files = console.readNumber('Número de filas:')
const columns = console.readNumber('Número de columnas:')

const NUM_CHAR_DRAW = 5
const CHAR_DRAW = '*'
const CHAR_SEPARATOR = ' '

let indxFilesMax = files * NUM_CHAR_DRAW
if (files !== 1) {
  indxFilesMax -= files - 1
}

let indxColumnsMax = columns * NUM_CHAR_DRAW
if (columns !== 1) {
  indxColumnsMax -= columns - 1
}

for (let indxFile = 0; indxFile < indxFilesMax; indxFile++) {
  for (let indxColumn = 0; indxColumn < indxColumnsMax; indxColumn++) {
    if (indxFile % (NUM_CHAR_DRAW - 1) === 0 || indxColumn % (NUM_CHAR_DRAW - 1) === 0) {
      console.write(CHAR_DRAW)
    } else {
      console.write(CHAR_SEPARATOR)
    }
  }
  console.writeln();
}