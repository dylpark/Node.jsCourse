// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const path = require('path')
const express = require('express')

const app = express()
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

// app.com
// app.com/help
// app.com/about

app.get('/weather', (req, res) => {
    res.send({
        location: 'Sydney',
        forecast: 'This is a weather forecast'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})