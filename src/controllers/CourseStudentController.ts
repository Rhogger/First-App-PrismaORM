import { Request, Response } from 'express';
import prismaClient from '../database/prismaClient';

export class CourseStudentController {
  async create(request: Request, response: Response) {
    const { id_course, id_student } = request.body;

    const courseStudent = await prismaClient.courseStudents.create({
      data: {
        id_course,
        id_student,
      },
    });
    return response.json(courseStudent);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const courseStudent = await prismaClient.courseStudents.delete({
      where: { id },
    });
    return response.json(courseStudent);
  }
}
