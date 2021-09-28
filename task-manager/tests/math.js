// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const farenheitToCelcius = (temp) => {
    return (temp - 32) / 1.8
}

const celciusTofarenheit = (temp) => {
    return (temp * 1.8) + 32
}

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }

            resolve(a + b)
        }, 2000)
    })
}

module.exports = {
    farenheitToCelcius,
    celciusTofarenheit,
    add
}