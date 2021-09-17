// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // Querying Documents

    // db.collection('users').findOne({ name: 'Jen' }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch user')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })

    // Challenge findOne Tasks
    // db.collection('tasks').findOne({ _id: new ObjectID("6143d8f2aea571fbf598130c") }, (error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // The Object ID

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.insertedId)
    // })

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