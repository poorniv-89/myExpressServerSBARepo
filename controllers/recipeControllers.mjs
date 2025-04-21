// Import recipes data
import { recipes } from '../data/recipes.mjs';

// Get all recipes and render using the 'recipes' view
export function getAllRecipes(req, res, next) {
    try {
        res.render('recipes', { recipes }); 
    } catch (err) {
        next(err);
    }
}

// Get all recipes from a specific user by userId
export function getOneRecipeFromUser(req, res, next) {
    try {
        let userId = req.params.id;

        // Check if userId is missing
        if (!userId) {
            throw new Error('User ID is missing');
        }

        console.log(userId);

        // Filter recipes belonging to the given user
        const recipe = recipes.filter(element => element.userId === userId);

        if (recipe.length > 0) {
            // Return the user's recipes
            res.json(recipe);
        } else {
            // If no recipes found, send 404 error
            const error = new Error("Recipe not found");
            error.status = 404;
            next(error);
        }
    } catch (err) {
        next(err); 
    }
}

// Post a new recipe
export function postNewRecipe(req, res, next) {
    const newRecipeDetails = req.body;

    try {
        if (newRecipeDetails) {
            // Generate a unique ID for the new recipe
            newRecipeDetails.id = recipes.length + 1;

            // Add the new recipe to the array
            recipes.push(newRecipeDetails);

            // Respond with success message
            res.status(201).json({
                message: "New recipe created successfully!",
                recipe: newRecipeDetails
            });
        } else {
            // If no data provided in the body
            const err = new Error('No details provided in the body!');
            err.status = 400;
            next(err);
        }
    } catch (err) {
        next(err); 
    }
}
