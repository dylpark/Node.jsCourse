// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const chalk = require('chalk');
const request = require('postman-request');
const weatherURL = 'http://api.weatherstack.com/current?access_key=&query=-27.470125,153.021072'

// request({ url: weatherURL, json: true }, (error, response) => {
//     if (error) {
//         console.log(chalk.redBright.bold('Unable to connect to weather provider.'))
//     } else if (response.body.error) {
//         console.log(chalk.redBright.bold('Unable to find location.'))
//     } else {
//         console.log(chalk.blue.bold(response.body.current.weather_descriptions[0] +
//             ". It is currently " + response.body.current.temperature + " °C." +
//             " It feels like " + response.body.current.feelslike + " °C."
//         ))
//     }
// })

// Geocoding HTTP Request
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Brisbane.json?access_token='

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.error(chalk.redBright.bold('Unable to connect to location services.'))
    } else if (response.body.features === 0) {
        console.error(chalk.redBright.bold('Unable to find location. Try another search term.'))
    } else {
        const lat = response.body.features[0].center[1]
        const lon = response.body.features[0].center[0]
        console.log(lat, lon)
    }

})