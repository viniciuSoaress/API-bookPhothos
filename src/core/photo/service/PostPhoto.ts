
import UseCase from "../../shared/useCase";
import Photo from "../model/Photo";
import DataBase from "./DataBase";

type Entrada = {
  avatar_url: string
}

export default class PostPhoto implements UseCase<Entrada, Photo>{

  constructor(readonly repositorio: DataBase) { }

  async handle(data: Entrada): Promise<Photo> {
    return await this.repositorio.createPhoto(data)
  }

}