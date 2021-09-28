// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const farenheitToCelcius = (temp) => {
    return (temp - 32) / 1.8
}

const celciusTofarenheit = (temp) => {
    return (temp * 1.8) + 32
}

module.exports = {
    farenheitToCelcius,
    celciusTofarenheit
}