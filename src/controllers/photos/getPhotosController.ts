import { Router } from "express";
import GetPhotos from "../../core/photo/service/GetPhotos";

export default class GetPhotosController{

  constructor(
    server: Router,
    useCase: GetPhotos
  ){
    server.get('/', async (_, res, next) => {
      try {
        const photos = await useCase.handle()

        res.status(200).json(photos)
      } catch (error) {
        next(error)
      }
    })
  }
}