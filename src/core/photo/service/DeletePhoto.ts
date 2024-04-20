import UseCase from "../../shared/useCase";
import DataBase from "./DataBase";

export default class Deletehoto implements UseCase<string, string> {

  constructor(readonly repisitorio: DataBase) { }

  async handle(data: string): Promise<string> {
    const photo = await this.repisitorio.deletePhoto(data)
    return photo
  }

}