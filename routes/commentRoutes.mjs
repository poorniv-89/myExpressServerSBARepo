import express from 'express';
const router = express.Router();
import getAllComments from '../controllers/commentControllers.mjs'


router.get('/', getAllComments);

export default router;