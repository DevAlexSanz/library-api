import { Router } from 'express';
import {
  getAllSubSections,
  getSubSectionById,
  getSubSectionByName,
  createSubSection,
  updateSubSection,
  deleteSubSection,
} from './subsection.controller';

import { verifyAdminToken } from '@middlewares/auth';

const router = Router();

router.get('/', [verifyAdminToken], getAllSubSections);
router.get('/:id', [verifyAdminToken], getSubSectionById);
router.get('/name/:name', [verifyAdminToken], getSubSectionByName);
router.post('/', [verifyAdminToken], createSubSection);
router.put('/:id', [verifyAdminToken], updateSubSection);
router.delete('/:id', [verifyAdminToken], deleteSubSection);

export default router;