import { Router } from "express";
import GetPhotoById from "../../core/photo/service/GetPhotoById";

export default class GetPhotoByIdController{

  constructor(
    server: Router,
    useCase: GetPhotoById
  ){
    server.get('/:id', async (req, res, next) => {
      try {
        const photoId = req.params.id

        const photo = await useCase.handle(photoId)
        
        res.status(200).json(photo)
      } catch (error) {
        next(error)
      }
    })
  }
}