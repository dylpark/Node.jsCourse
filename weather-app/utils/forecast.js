// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const chalk = require('chalk')
const request = require('postman-request')

const forecast = (lat, lon, callback) => {
    const forecastURL = 'http://api.weatherstack.com/current?access_key=&query=' + lat + ',' + lon

    request({ url: forecastURL, json: true }, (error, response) => {
        if (error) {
            callback((chalk.redBright.bold('Unable to connect to weather provider.')), undefined)
        } else if (response.body.error) {
            callback(chalk.redBright.bold('Unable to find location.'), undefined)
        } else {
            callback(undefined, (chalk.blue.bold(response.body.current.weather_descriptions[0] +
                ". It is currently " + response.body.current.temperature + " °C." +
                " It feels like " + response.body.current.feelslike + " °C."
            )))
        }
    })
}

module.exports = forecast