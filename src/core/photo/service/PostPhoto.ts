
import CasoDeUSo from "../../shared/CasoDeUso";
import Photo from "../model/Photo";
import DataBase from "./DataBase";

type Entrada = {
  avatar_url: string
}

export default class PostPhoto implements CasoDeUSo<Entrada, Photo | null>{

  constructor(readonly repositorio: DataBase) { }

  async executar(data: Entrada): Promise<Photo | null> {
    return await this.repositorio.post(data) ?? null
  }

}