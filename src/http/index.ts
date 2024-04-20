import express from "express";
import cors from 'cors'
import photoRouter  from "../routers/photos";

export const app = express()


app.use(express.json())
app.use(cors())

app.use('/photos',photoRouter)


app.listen(8182, () => {
  console.log('api em execução')
})