import { Request, Response } from 'express';
import prismaClient from '../database/prismaClient';

export class CourseController {
  static async get(request: Request, response: Response) {
    const course = await prismaClient.course.findMany();
    return response.json(course);
  }

  static async create(request: Request, response: Response) {
    const { name } = request.body;

    const course = await prismaClient.course.create({
      data: {
        name,
      },
    });
    return response.json(course);
  }

  static async delete(request: Request, response: Response) {
    const { id } = request.params;

    await prismaClient.course.delete({
      where: { id },
    });

    return response.json({ deleted: true });
  }
}
