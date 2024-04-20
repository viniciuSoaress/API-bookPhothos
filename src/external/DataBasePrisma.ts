import { PrismaClient } from "@prisma/client";
import DataBase from "../core/photo/service/DataBase";
import Photo from "../core/photo/model/Photo";


export default class DataBasePrisma implements DataBase {

  private readonly prisma: PrismaClient

  constructor() { this.prisma = new PrismaClient() }

  async getPhotos(): Promise<Photo[]> {
    return await this.prisma.photo.findMany()
  }

  async getPothoById(id: string): Promise<Photo | null> {
    const photo = await this.prisma.photo.findUnique({
      where: { id }
    })

    return photo
  }


  async createPhoto(data: Photo): Promise<Photo> {
    const { avatar_url } = data

    const photo = await this.prisma.photo.create({
      data: {avatar_url}
    })

    if (!photo) {
      throw new Error('foto não foi criada.')
    }

    return photo
  }

  async deletePhoto(id: string): Promise<string> {
    const deleted = await this.prisma.photo.delete({
      where: { id }
    })

    return deleted.id
  }

} 