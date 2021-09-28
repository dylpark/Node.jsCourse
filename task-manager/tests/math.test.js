// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const { farenheitToCelcius, celciusTofarenheit } = require('../tests/math.js')

test('Should convert 32 F to 0 C', () => {
    const temp = farenheitToCelcius(32)
    expect(temp).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
    const temp = celciusTofarenheit(0)
    expect(temp).toBe(32)
})