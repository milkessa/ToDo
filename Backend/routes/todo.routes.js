import express from 'express'
import { addTask, getTask} from '../controllers/todo.controllers.js';

const router= express.Router();

router.get('/', getTask)
router.post('/', addTask)

export default router;