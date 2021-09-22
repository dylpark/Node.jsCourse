// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

// const multer = require('multer')
// const upload = multer({
//     dest: 'images'
// })
// app.post('/upload', upload.single('upload'), (req, res, next) => {
//     res.send()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})