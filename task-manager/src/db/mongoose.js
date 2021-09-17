// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true
})

// User Model

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is inavlid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Invalid Age')
            }
        }
    }
})

const newUser = new User({
    name: 'Jim',
    age: 34,
    email: 'myemail@mead.io'
})

newUser.save().then(() => {
    console.log(newUser)
}).catch((error) => {
    console.log('Error!', error)
})

// Task Model

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Learn the Mongoose library',
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})