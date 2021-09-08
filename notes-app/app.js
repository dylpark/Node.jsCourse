//
//
//

const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('17.1.1')

// Command options: Add, Remove, List, Read

// Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builders: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body text of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log(chalk.green.bold('Title: ' + argv.title))
        console.log(chalk.white('Body: ' + argv.body))
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
        console.log(chalk.whiteBright.bold('Listing all your notes'))
    }
})

// Read Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log(chalk.orange.bold('Reading a note'))
    }
})

console.log(yargs.argv)