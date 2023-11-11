import { Router } from 'express';
import { CourseController } from './controllers/CourseController';
import { StudentController } from './controllers/StudentController';
import { CourseStudentController } from './controllers/CourseStudentController';

const router = Router();

const courseController = new CourseController();
const studentController = new StudentController();
const courseStudentController = new CourseStudentController();

router.post('/course', courseController.create);
router.delete('/course/:id', courseController.delete);
router.post('/student', studentController.create);
router.delete('/student', studentController.delete);
router.post('/course-student', courseStudentController.create);
router.delete('/course-student', courseStudentController.delete);

export default router;
