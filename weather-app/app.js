// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    console.log(chalk.red('Please Provide a Location'))
} else {
    geocode(location, (error, { lat, lon, location } = {}) => {
        if (error) {
            return console.log(error)
        }

        forecast(lat, lon, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(chalk.blue.bold(location))
            console.log(forecastData)
        })

    })
}