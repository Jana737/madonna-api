const request = require('supertest')
const app = require('../src/app')

describe('GET /magazines', () => {
  it('responds with 200', async () => {
    const response = await request(app).get('/magazines')

    expect(response.status).toBe(200)
  })

  it('responds with 3 magazines', async () => {
    const response = await request(app).get('/magazines')

    expect(response.body.length).toBe(3)
  })
})