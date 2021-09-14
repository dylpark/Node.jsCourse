// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const chalk = require('chalk')
const request = require('postman-request')
const geocodeApiKey = ''

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        encodeURIComponent(address) +
        '.json?access_token=' +
        geocodeApiKey

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback(chalk.red('Unable to connect to location services.'), undefined)
        } else if (body.features.length === 0) {
            callback(chalk.red('Unable to find location. Try another search term.'), undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                lon: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode