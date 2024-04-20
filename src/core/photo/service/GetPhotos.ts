import UseCase from "../../shared/useCase";
import Photo from "../model/Photo";
import DataBase from "./DataBase";

export default class GetPhotos implements UseCase<void, Photo[]>{

  constructor(readonly repositorio: DataBase) { }

  async handle(): Promise<Photo[]> {
    return await this.repositorio.getPhotos()
  }

}