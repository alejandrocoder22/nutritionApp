const supertest = require('supertest')
const { app } = require('../src')
const cleanUser = require('./utils/cleanUser')

const request = supertest(app)

const user = {
  username: 'testUser',
  password: '123456'
}

describe('Tests in usersRouter', () => {
  beforeAll(() => {
    cleanUser()
  })

  it('POST /api/users/register should return 200', async () => {
    const response = await request.post('/api/users/register')
      .send(user)
      .set('Content-Type', 'application/json')

    expect(response.status).toBe(200)
  })

  it('POST /api/users/register should return 200', async () => {
    const response = await request.post('/api/users/login')
      .send(user)
      .set('Content-Type', 'application/json')
    expect(response.status).toBe(200)
  })
})
