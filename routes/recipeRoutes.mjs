import express from 'express';
import { ingredientValidator } from '../middleware/ingredientValidator.mjs'; 
import {getAllRecipes, getOneRecipeFromUser, postNewRecipe} from '../controllers/recipeControllers.mjs'; 
const router = express.Router();

//To get all recipes
router
.get('/', getAllRecipes)
.post('/', ingredientValidator, postNewRecipe);

//To get the recipe from one user using params
router.get('/:id', getOneRecipeFromUser);

export default router;