// Dylan Park, 2021.
// The Complete Node.js Developer Course (3rd Edition)

const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Test',
    email: 'another@email.com',
    password: 'testtest8!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
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

test('Sould get profile for user', async() => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Sould not get profile for unauthenticated user', async() => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user', async() => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not delete account for unauthenticate user', async() => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})



// module.exports = {
// }