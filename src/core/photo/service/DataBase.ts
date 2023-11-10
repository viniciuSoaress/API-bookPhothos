import Photo from "../model/Photo";

export default interface DataBase {
  get(): Promise<Photo[]>,
  post(data: Photo): Promise<Photo | null>,
  delet(id: number): Promise<void>
}