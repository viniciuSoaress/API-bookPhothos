import CasoDeUSo from "../../shared/CasoDeUso";
import Photo from "../model/Photo";
import DataBase from "./DataBase";

export default class GetPhoto implements CasoDeUSo<void, Photo[]>{

  constructor(readonly repositorio: DataBase) { }


  async executar(): Promise<Photo[]> {
    return await this.repositorio.get()
  }

}