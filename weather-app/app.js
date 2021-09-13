// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const request = require('postman-request');
const url = 'http://api.weatherstack.com/current?access_key=API_KEY&query=-27.470125,153.021072'

request({ url: url, json: true }, (error, response) => {

    // console.log(response.body.current)

    console.log(response.body.current.weather_descriptions[0] +
        ". It is currently " + response.body.current.temperature + " °C." +
        " It feels like " + response.body.current.feelslike + " °C."
    )
})