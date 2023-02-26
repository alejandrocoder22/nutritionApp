
const supertest = require('supertest')
const { app } = require('../src/index')

const request = supertest(app)

describe('Tests in foodRouter', () => {
  it('/api/food must return 200', async () => {
    const response = await request.get('/api/food')
    expect(response.status).toBe(200)
  })
})
