// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const path = require('path')
const express = require('express')
const hbs = require('hbs')

// app.com
// app.com/help
// app.com/about
const app = express()

// Paths for express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup for handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDir))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Index',
        name: 'Weather Man'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Weather App',
        name: 'Weather Man'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is a test help message.',
        title: 'Help',
        name: 'Weather Man'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Sydney',
        forecast: 'This is a weather forecast'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Weather Man',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Weather Man',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})