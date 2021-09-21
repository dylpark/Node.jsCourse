// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || 3000

app.use((req, res, next) => {
    console.log(req.mehtod, req.path)
    next()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// Express Middleware
// Without
// New Request -> Run Route Handler
// With
// New Request -> Do Something/Customise Behaviour -> Run Route Handler

const myFunction = async() => {
    const token = jwt.sign({ _id: '123' }, 'thisismynewapp', { expiresIn: '7 days' })
    const data = jwt.verify(token, 'thisismynewapp')
}

myFunction()