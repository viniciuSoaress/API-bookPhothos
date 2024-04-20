import { Router } from "express";
import DataBasePrisma from "../external/DataBasePrisma";
import GetPhotos from "../core/photo/service/GetPhotos";
import GetPhotosController from "../controllers/photos/getPhotosController";
import GetPhotoById from "../core/photo/service/GetPhotoById";
import GetPhotoByIdController from "../controllers/photos/getPhotoByIdContrller";
import Deletehoto from "../core/photo/service/DeletePhoto";
import DeletehotoController from "../controllers/photos/deletePhotoController";
import PostPhoto from "../core/photo/service/PostPhoto";
import PostPhotoController from "../controllers/photos/postPhotoController";


const photoRouter = Router()
const prisma = new DataBasePrisma()

const postPhoto = new PostPhoto(prisma)
new PostPhotoController(photoRouter, postPhoto)

const getPhotos = new GetPhotos(prisma)
new GetPhotosController(photoRouter, getPhotos)

const getPothoById = new GetPhotoById(prisma)
new GetPhotoByIdController(photoRouter, getPothoById)

const deletePhoto = new Deletehoto(prisma)
new DeletehotoController(photoRouter, deletePhoto)

export default photoRouter