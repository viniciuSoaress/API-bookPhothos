import { Router } from "express";
import PostPhoto from "../../core/photo/service/PostPhoto";

export default class PostPhotoController{

  constructor(
    server: Router,
    useCase: PostPhoto
  ){
    server.post('/', async (req, res, next) => {
      try {
        const {avatar_url} = req.body

        const photo = await useCase.handle({avatar_url})

        res.status(201).json(photo)
      } catch (error) {
        next(error)
      }
    })
  }
}