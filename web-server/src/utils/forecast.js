// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const request = require('postman-request')
const forecastApiKey = ''

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' +
        forecastApiKey +
        '&query=' +
        lat + ',' + lon

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather provider.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, (body.current.weather_descriptions[0] +
                ". It is currently " + body.current.temperature + "°C." +
                " It feels like " + body.current.feelslike + "°C."
            ))
        }
    })
}

module.exports = forecast