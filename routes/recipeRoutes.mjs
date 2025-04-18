import express from 'express';
import {getAllRecipes, getOneRecipeFromUser} from '../controllers/recipeControllers.mjs'; 
const router = express.Router();

//To get all recipes
router.get('/', getAllRecipes);

//To get the recipe from one user using params
router.get('/:id', getOneRecipeFromUser);

export default router;