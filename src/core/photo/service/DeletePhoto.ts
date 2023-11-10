import CasoDeUSo from "../../shared/CasoDeUso";
import DataBase from "./DataBase";

export default class Deletehoto implements CasoDeUSo<number, void>{

  constructor(readonly repisitorio: DataBase){}

  async executar(data: number): Promise<void> {
   await this.repisitorio.delet(data)
  }
  
}