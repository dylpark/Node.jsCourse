// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const path = require('path')
const express = require('express')

const app = express()
const publicDir = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDir))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Name'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather App',
        name: 'Weather Man'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is a test help message.'
    })
})

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