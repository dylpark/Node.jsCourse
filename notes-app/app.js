//
//
//
// const validator = require('validator')
const chalk = require('chalk')
const notesFile = require('./notes.js')

const note = notesFile()

const greenMessage = chalk.green.bold('Green')
const redMessage = chalk.redBright.bold('Red')

console.log(note)
console.log(greenMessage)
console.log(redMessage)
    // console.log(validator.isURL('https://dylpark.com'))