import express from 'express';
import { registerUser, loginUser, createUser, getClients, getTeamMembers, getTeamLeads, getStudents } from '../controllers/UsersController.js';

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Create user route (for admin)
router.post('/create', createUser);

// Get all clients route
router.get('/clients', getClients);

// Get all team members route
router.get('/team-members', getTeamMembers);

// Get all team leads route
router.get('/team-leads', getTeamLeads);

// Get all students route
router.get('/students', getStudents);

export default router;
