import express from 'express';
import {getAllUsers} from '../controllers/userControllers.mjs'
const router = express.Router();

router.get('/', getAllUsers);

export default router;