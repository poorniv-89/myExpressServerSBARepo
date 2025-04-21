// Import express and create a new router instance
import express from 'express';
import { getAllUsers, deleteUserByUserId } from '../controllers/userControllers.mjs';

const router = express.Router();

// Route to get all users
router.get('/', getAllUsers); 

// Route to delete a user by user ID using query paramter
router.delete('/', deleteUserByUserId);  

export default router; 
