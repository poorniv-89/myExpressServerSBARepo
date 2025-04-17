import express from 'express';
const router = express.Router();
import { recipes } from '../data/recipes.mjs';

router.get('/', (req, res)=>{
    res.json(recipes);
})

export default router;