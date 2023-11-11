import { Request, Response } from 'express';
import prismaClient from '../database/prismaClient';

export class CourseController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    const course = await prismaClient.course.create({
      data: {
        name,
      },
    });
    return response.json(course);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const course = await prismaClient.course.delete({
      where: { id },
    });
    return response.json(course);
  }
}
