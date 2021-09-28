// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const { farenheitToCelcius, celciusTofarenheit, add } = require('../tests/math.js')

test('Should convert 32 F to 0 C', () => {
    const temp = farenheitToCelcius(32)
    expect(temp).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
    const temp = celciusTofarenheit(0)
    expect(temp).toBe(32)
})

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(10)
//         done()
//     }, 2000)
// })

test('Should add two numbers', (done) => {
    add(2, 3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('Another add numbers test async/await', async() => {
    const sum = await add(10, 22)
    expect(sum).toBe(32)
})