//
//
//

const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// const command = process.argv[2]

// Command options: Add, Remove, List, Read
// Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log(chalk.green.bold('Adding a new note'))
    }
})

// Remove Command
yargs.command({
    command: 'remove',
    describe: 'Removing new note',
    handler: function() {
        console.log(chalk.red.bold('Removing the note'))
    }
})

// List Command
yargs.command({
    command: 'list',
    describe: 'List all your notes',
    handler: function() {
        console.log(chalk.blueBright.bold('Listing all your notes'))
    }
})

// Read Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log(chalk.whiteBright.bold('Reading a note'))
    }
})


// console.log(process.argv)
console.log(yargs.argv)