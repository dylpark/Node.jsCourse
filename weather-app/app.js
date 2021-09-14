// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const request = require('postman-request');
// const weatherURL = 'http://api.weatherstack.com/current?access_key=API_KEY&query=-27.470125,153.021072'

// request({ url: weatherURL, json: true }, (error, response) => {

//     // console.log(response.body.current)

//     console.log(response.body.current.weather_descriptions[0] +
//         ". It is currently " + response.body.current.temperature + " °C." +
//         " It feels like " + response.body.current.feelslike + " °C."
//     )
// })

// Geocoding HTTP Request
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token='

request({ url: geocodeURL, json: true }, (error, response) => {
    const lat = response.body.features[0].center[1]
    const lon = response.body.features[0].center[0]

    console.log(lat, lon)
})