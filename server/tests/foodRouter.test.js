
const supertest = require('supertest')
const { app } = require('../src/index')
const cleanMockupFood = require('./utils/cleanFood')

const request = supertest(app)

describe('Tests in foodRouter', () => {
  beforeAll(() => {
    return cleanMockupFood()
  })

  it('GET /api/food must return 200', async () => {
    const response = await request.post('/api/food')
      .set('Content-type', 'application/json')
      .send({
        proteins: 19.305,
        carbs: 49.24,
        fats: 6.3,
        food_name: 'test',
        kcal: 336
      })
    expect(response.status).toBe(200)
  })

  it('POST /api/food must return 200', async () => {
    const response = await request.get('/api/food')
    expect(response.status).toBe(200)
  })
})
