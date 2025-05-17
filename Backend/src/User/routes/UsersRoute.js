import express from 'express';
import { registerUser } from '../controllers/UsersController.js';

const router = express.Router();

// Register route
router.post('/register', registerUser);

export default router;
