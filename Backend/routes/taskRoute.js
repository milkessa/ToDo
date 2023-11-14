import { Router } from 'express';
import { getTask, saveTask } from '../controllers/taskController.js';

const router = Router();

router.get('/', getTask);
router.post('/save', saveTask);

export default router;