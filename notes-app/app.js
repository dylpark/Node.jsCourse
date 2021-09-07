//
//
//
// const validator = require('validator')
const chalk = require('chalk')
const notesFile = require('./notes.js')

const note = notesFile()

const greenMessage = chalk.green.bold('Success')

console.log(note)
console.log(greenMessage)
    // console.log(validator.isURL('https://dylpark.com'))