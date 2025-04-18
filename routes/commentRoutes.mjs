import express from 'express';
const router = express.Router();
import {getAllComments, getUserComments} from '../controllers/commentControllers.mjs'


router.get('/', getAllComments);
router.get('/:id', getUserComments);

export default router;