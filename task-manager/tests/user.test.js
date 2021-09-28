// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Test',
    email: 'another@email.com',
    password: 'testtest8!'
}

beforeEach(async() => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should sign up a new user', async() => {
    await request(app).post('/users').send({
        name: 'name',
        email: 'test@email.com',
        password: 'testest'
    }).expect(201)
})

test('Should login excisting user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login nonexistent user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'notthepassword'
    }).expect(400)
})

// module.exports = {
// }