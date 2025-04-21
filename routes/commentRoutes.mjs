import express from 'express';
const router = express.Router();
import {getAllComments, getUserComments, updateComments} from '../controllers/commentControllers.mjs'


router
.get('/', getAllComments)
;
router.get('/:id', getUserComments)
.patch('/:id/:recipename', updateComments);

export default router;