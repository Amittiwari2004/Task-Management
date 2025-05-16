import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';

const router = express.Router();

router.use(authMiddleware); // protect all routes below

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
