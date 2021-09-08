//
//
//
// const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes.js')

const command = process.argv[2]

if (command === chalk.green.bold('add')) {
    console.log('Adding Note')
} else if (command === 'remove') {
    console.log(chalk.red.bold('Removing Note'))
}

console.log(process.argv)