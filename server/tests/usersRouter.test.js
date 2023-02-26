const supertest = require('supertest')
const { app } = require('../src')

const request = supertest(app)
