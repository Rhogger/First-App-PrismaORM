import { Request, Response } from 'express';
import prismaClient from '../database/prismaClient';

export class CourseStudentController {
  static async get(request: Request, response: Response) {
    const courseStudent = await prismaClient.courseStudents.findMany();
    return response.json(courseStudent);
  }

  static async create(request: Request, response: Response) {
    const { id_course, id_student } = request.body;

    const courseStudent = await prismaClient.courseStudents.create({
      data: {
        id_course,
        id_student,
      },
    });
    return response.json(courseStudent);
  }

  static async delete(request: Request, response: Response) {
    const { id } = request.params;

    await prismaClient.courseStudents.delete({
      where: { id },
    });
    return response.json({ deleted: true });
  }
}
