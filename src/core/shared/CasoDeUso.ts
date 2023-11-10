import Photo from "../photo/model/Photo";

export default interface CasoDeUSo<E, S>{
  executar(data: E): Promise<S>
}