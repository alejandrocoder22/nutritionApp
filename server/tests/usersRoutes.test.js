
const supertest = require('supertest')
const { app, server } = require('../src/index')

const api = supertest(app)

test('Hay dos usuarios', async () => {
  const response = await api.get('/users')
  expect(response.body.data).toHaveLength(3)
})

afterAll(() => {
  server.close()
})
