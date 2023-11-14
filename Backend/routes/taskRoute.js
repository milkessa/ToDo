import { Router } from "express"; 
import { getTask } from "../controllers/taskController.js";
import { saveTask } from "../controllers/taskController.js";
const router=Router();
router.get('/', getTask)
router.post('/save', saveTask)

export default router;