import request from 'supertest'
import { app } from '../http'

describe('should test', () => {
  it('getphotosController', async () => {
    const response = await request(app).get('/photos')

    expect(response.status).toBe(200)
    
  })
})