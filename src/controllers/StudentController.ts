import { Request, Response } from 'express';
import prismaClient from '../database/prismaClient';

export class StudentController {
  static async get(request: Request, response: Response) {
    const student = await prismaClient.student.findMany();
    return response.json(student);
  }

  static async create(request: Request, response: Response) {
    const { name } = request.body;

    const student = await prismaClient.student.create({
      data: {
        name,
      },
    });
    return response.json(student);
  }

  static async delete(request: Request, response: Response) {
    const { id } = request.params;

    await prismaClient.student.delete({
      where: { id },
    });

    return response.json({ deleted: true });
  }
}
