// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const request = require('postman-request');
const url = 'http://api.weatherstack.com/current?access_key=API_KEY&query=-27.470125,153.021072'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})