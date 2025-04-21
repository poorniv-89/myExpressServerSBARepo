// Import express and create a new router instance
import express from 'express';
const router = express.Router();
import { getAllComments, getUserComments, updateComments } from '../controllers/commentControllers.mjs';

// Route to get all comments
router
  .get('/', getAllComments)  // Handles GET requests to /comments (returns all comments)

// Route to get comments by a specific user 
router.get('/:id', getUserComments)  

// Route to update a specific user's comment on a specific recipe
router.patch('/:id/:recipename', updateComments)  

export default router;  
