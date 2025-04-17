import express from 'express';
import getAllRecipes from '../controllers/recipeControllers.mjs'; 
const router = express.Router();

router.get('/', getAllRecipes);

export default router;