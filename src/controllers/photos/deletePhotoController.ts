import { Router } from "express";
import Deletehoto from "../../core/photo/service/DeletePhoto";


export default class DeletehotoController {

  constructor(
    server: Router,
    useCase: Deletehoto
  ){
    server.delete('/:id', async (req, res, next) => {
      try {
        const photoId = req.params.id
        const photo = await useCase.handle(photoId)

        res.status(204).json(photo)
      } catch (error) {
        next(error)
      }
    })
  }
}