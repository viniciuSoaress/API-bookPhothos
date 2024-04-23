import request from 'supertest'
import { app } from '../http'

describe('test', () => {
  it('getphotobyid controller', async () => {
    const id = '47d581e1-fc27-4c3a-b8f1-ed19125018da'
    const response = await request(app).get(`/photos/${id}`)

    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      "id": "47d581e1-fc27-4c3a-b8f1-ed19125018da",
      "avatar_url": "world"
    })

  })
})