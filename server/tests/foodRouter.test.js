
const supertest = require('supertest')
const { app, server } = require('../src/index')

const request = supertest(app)

test('/api/food must return 200', async () => {
  const response = await request.get('/api/food')
  expect(response.status).toBe(200)
})

afterAll(() => {
  server.close()
})
