//
//
//
const validator = require('validator')
const notesFile = require('./notes.js')

const note = notesFile()

console.log(note)
console.log(validator.isEmail('@example.com'))