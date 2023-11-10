import { PrismaClient } from "@prisma/client";
import DataBase from "../core/photo/service/DataBase";
import Photo from "../core/photo/model/Photo";


export default class DataBasePrisma implements DataBase {


  readonly prisma = new PrismaClient()

  async get(): Promise<Photo[]> {
    return await this.prisma.photo.findMany()
  }


  async post(data: Photo): Promise<Photo | null> {
    const { avatar_url } = data

    return await this.prisma.photo.create({
      data: {
        avatar_url
      }
    }) ?? null
  }

  async delet(id: number): Promise<void> {
    await this.prisma.photo.delete({
      where: { id }
    })
  }

} 