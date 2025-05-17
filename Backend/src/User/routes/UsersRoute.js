import express from 'express';
import { registerUser, loginUser, createUser } from '../controllers/UsersController.js';

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Create user route (for admin)
router.post('/create', createUser);

export default router;
