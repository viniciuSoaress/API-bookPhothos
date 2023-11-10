import { Router } from "express";
import PhotoController from "../controllers/photos/PhotosController";

const PControlle = new PhotoController()


export const photoRouter = Router()

photoRouter.post('/photos', PControlle.post)
photoRouter.get('/photos', PControlle.get)
photoRouter.delete('/photos/:id', PControlle.delete)