import { Router } from 'express';
import {
  getAllLoansByStudentId,
  getAllPendingLoans,
  getLoanById,
  createLoan,
  confirmLoan,
  rejectLoan,
  deleteLoan,
  loanDashoardAndInfo,
  cancelLoan,
  returnLoan,
} from './loan.controller';

import { verifyAdminToken, verifyUserToken } from '@middlewares/auth';

const router = Router();

router.get('/student/:id', [verifyUserToken], getAllLoansByStudentId);
router.get('/pending', [verifyAdminToken], getAllPendingLoans);
router.get('/:id', getLoanById);
router.post('/', createLoan);
router.put('/confirm/:id', confirmLoan);
router.put('/reject/:id', rejectLoan);
router.delete('/:id', deleteLoan);
router.get('/info/dashboard&loans', [verifyAdminToken], loanDashoardAndInfo);
router.put('/cancel/:id', cancelLoan);
router.put('/return/:id', returnLoan);

export default router;
