import Photo from "../model/Photo";

export default interface DataBase {
  getPhotos(): Promise<Photo[]>,
  getPothoById(id: string): Promise<Photo | null>,
  createPhoto(data: Photo): Promise<Photo>,
  deletePhoto(id: string): Promise<string>
}