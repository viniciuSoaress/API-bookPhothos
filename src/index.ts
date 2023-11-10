import express from "express";
import cors from 'cors'
import { PrismaClient } from ".prisma/client";
import { photoRouter } from "./routers/photos";

const app = express()
const prisma = new PrismaClient()


app.use(express.json())
app.use(cors())

app.use(photoRouter)

app.get('/photos', async (req, res) => {
  const photos = await prisma.photo.findMany()

  return res.send(photos)
})




app.listen(8182, () => {
  console.log('api em execução')
})