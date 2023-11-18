import { Router } from 'express';
import { CourseController } from './controllers/CourseController';
import { StudentController } from './controllers/StudentController';
import { CourseStudentController } from './controllers/CourseStudentController';

const router = Router();

router.get('/course', CourseController.get);
router.post('/course', CourseController.create);
router.delete('/course/:id', CourseController.delete);

router.get('/student', StudentController.get);
router.post('/student', StudentController.create);
router.delete('/student/:id', StudentController.delete);

router.get('/course-student', CourseStudentController.get);
router.post('/course-student', CourseStudentController.create);
router.delete('/course-student/:id', CourseStudentController.delete);

export default router;
