const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=' +
    '&query=-27.470125,153.021072'

// HTTP used because https is a paid feature of the Weatherstack API

const request = http.request(url, (error, response) => {

    let data = data + chunk.toString()

    response.on('data', (chunk) => {
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error occurred: ', error)
})

request.end