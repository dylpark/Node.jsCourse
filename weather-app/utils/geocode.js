// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const chalk = require('chalk')
const request = require('postman-request')

const geocode = (address, callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token='

    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            callback(chalk.red.bold('Unable to connect to location services.'), undefined)
        } else if (response.body.features.length === 0) {
            callback(chalk.red.bold('Unable to find location. Try another search term.'), undefined)
        } else {
            callback(undefined, {
                lat: response.body.features[0].center[1],
                lon: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode