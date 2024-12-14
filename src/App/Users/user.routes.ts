import { Router } from 'express';
import {
  createStudentAccount,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from './user.controller';
import { verifyUserToken, verifyAdminToken } from '@middlewares/auth';

const router = Router();

router.post('/create-account', [verifyAdminToken], createStudentAccount);
router.post('/login', loginUser);
router.get('/', [verifyAdminToken], getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', [verifyUserToken], updateUser);
router.delete('/:id', [verifyAdminToken], deleteUser);

export default router;
