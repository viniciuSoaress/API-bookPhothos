import request from 'supertest'
import { app } from '../http'

describe('test', () => {
  it('delete photo constroller', async () => {
    const id = '4f6002c1-66d9-479c-95f0-d4462f452c9f'

    const response = await request(app).delete(`/photos/${id}`)

    expect(response.status).toBe(204)
  })
})