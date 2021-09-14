// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(-27.470125, 153.021072, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

geocode('Boston', (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})