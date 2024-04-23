import  request  from "supertest";
import { app } from "../http";

describe('test', () => {
  it('create photos controller', async () => {

    const data = {
      avatar_url: 'hello'
    }

    const response = await request(app)
    .post('/photos')
    .send(data)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })
})