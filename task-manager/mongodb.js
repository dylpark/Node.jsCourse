// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

// CRUD
// Create Read Update Delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('tasks').insertMany([{
        description: 'Clean the house',
        completed: true
    }, {
        description: 'Renew inspection',
        completed: false
    }, {
        description: 'Pot plants',
        completed: false
    }], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!')
        }

        console.log(result.insertedIds)
    })
})