import { Router } from 'express';
import {
  getStudentByUserId,
  getAllStudents,
  getStudentsBySubSection,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from './student.controller';
import { verifyAdminToken } from '@middlewares/auth';

const router = Router();

router.get('/user/:id', getStudentByUserId);
router.get('/', [verifyAdminToken], getAllStudents);
router.get('/subsection=:id', getStudentsBySubSection);
router.get('/:id', getStudentById);
router.post('/', [verifyAdminToken], createStudent);
router.put('/:id', [verifyAdminToken], updateStudent);
router.delete('/:id', [verifyAdminToken], deleteStudent);

export default router;
