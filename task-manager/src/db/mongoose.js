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
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    }
})

const newUser = new User({
    name: 'Andrew',
    email: 'MYEMAIL@MEAD.IO   ',
    password: 'phone098!'
})

newUser.save().then(() => {
    console.log(newUser)
}).catch((error) => {
    console.log('Error!', error)
})

// Task Model
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: '  Eat lunch'
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})