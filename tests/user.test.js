const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')
 //env-cmd config/test.env 
//env-cmd config/dev.env 
const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Mariem',
    email: 'mariem@gmail.com',
    password: 'M_12833980',
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)//process.env.JWT_SECRET
    }]
}
beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app)
    .post('/users')
    .send({
        name: 'Zohra',
        email: 'zohra.belkhiria@ensi-uma.tn',
        password: 'Z_12833980'
    })
    .expect(201)
})

test('Should login existing user', async() => {
    await request(app)
    .post('/users/login')
    .send({
        email: userOne.email,
        password: userOne.password
    })
    .expect(200)
})

test('Should not login nonexisting user', async() => {
    await request(app)
    .post('/users/login')
    .send({
        email: userOne.email,
        password: '55555555555'
    })
    .expect(400)
})

test('Should get profile for user', async () =>{
    await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
    .get('/users/me')
    .send()
    .expect(401)
})

test('Should delete account for user', async () => {
    await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})

test('Should not delete account for unauthenticate user', async () => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})