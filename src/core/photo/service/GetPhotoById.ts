import UseCase from "../../shared/useCase";
import Photo from "../model/Photo";
import DataBase from "./DataBase";


export default class GetPhotoById implements UseCase<string, Photo | null>{

  constructor(private readonly repositiro: DataBase){}

  async handle(data: string): Promise<Photo| null> {
    return await this.repositiro.getPothoById(data)
  }
}