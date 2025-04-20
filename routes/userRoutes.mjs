import express from 'express';
import {getAllUsers, deleteUserByUserId} from '../controllers/userControllers.mjs'
const router = express.Router();

router.get('/', getAllUsers);
router.delete('/', deleteUserByUserId);

export default router;