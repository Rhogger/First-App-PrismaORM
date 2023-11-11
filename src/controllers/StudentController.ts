import { Request, Response } from 'express';
import prismaClient from '../database/prismaClient';

export class StudentController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    const student = await prismaClient.student.create({
      data: {
        name,
      },
    });
    return response.json(student);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const student = await prismaClient.student.delete({
      where: { id },
    });
    return response.json(student);
  }
}
