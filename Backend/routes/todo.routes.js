import { Router } from "express"; 
import { getTask } from "../controllers/todo.controllers.js";
import { saveTask } from "../controllers/todo.controllers.js";
const router=Router();
router.get('/', getTask)
router.post('/save', saveTask)

export default router;