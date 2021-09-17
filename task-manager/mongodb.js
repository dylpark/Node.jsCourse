// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

// CRUD
// Create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        _id: id,
        name: 'Vikram',
        age: 26
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log(result.insertedId)
    })

    // db.collection('users').insertMany([{
    //     name: 'Jen',
    //     age: 28
    // }, {
    //     name: 'Gunther',
    //     age: 27
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.insertedIds)
    // })

    // Insert Documents

    // db.collection('tasks').insertMany([{
    //     description: 'Clean the house',
    //     completed: true
    // }, {
    //     description: 'Renew inspection',
    //     completed: false
    // }, {
    //     description: 'Pot plants',
    //     completed: false
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.insertedIds)
    // })
})