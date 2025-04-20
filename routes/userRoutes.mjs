import express from 'express';
import {getAllUsers, deleteUserByUserId} from '../controllers/userControllers.mjs'
const router = express.Router();

router.get('/', getAllUsers)
.delete('/', deleteUserByUserId);

export default router;