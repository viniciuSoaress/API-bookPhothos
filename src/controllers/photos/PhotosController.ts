
import Deletehoto from "../../core/photo/service/DeletePhoto";
import GetPhoto from "../../core/photo/service/GetPhoto";
import PostPhoto from "../../core/photo/service/PostPhoto";
import DataBasePrisma from "../../external/DataBasePrisma";

const dataBasePrisma = new DataBasePrisma()
const postPhoto = new PostPhoto(dataBasePrisma)

const getPhoto = new GetPhoto(dataBasePrisma)

const deletePhoto = new Deletehoto(dataBasePrisma)

export default class PhotoController {

  async post(req: any, res: any) {
    return res.send(await postPhoto.executar(req.body))
  }

  async get(req: any, res: any) {
    return res.send(await getPhoto.executar())
  }

  async delete(req: any, res: any) {
    await deletePhoto.executar(+req.params.id)
    res.end()
  }

}