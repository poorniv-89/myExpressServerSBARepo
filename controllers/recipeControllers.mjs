import { recipes } from '../data/recipes.mjs';
export function getAllRecipes(req, res, next) {
    try {
        res.render('recipes', { recipes });
    } catch (err) {
        next(err);
    }
}
export function getOneRecipeFromUser(req, res, next) {
    try {
        let userId = req.params.id;
        console.log(userId);
        const recipe = recipes.filter(element => element.userId === userId);
        if (recipe.length > 0) {
            res.json(recipe);
        }
        else {
            const error = new Error("Recipe not found");
            error.status = 404;
            next(error);
        }
    }
    catch (err) {
        next(err);
    }
}

export function postNewRecipe(req, res, next) {
    try{
    const newRecipeDetails = req.body;
    newRecipeDetails.id = recipes.length + 1;
    recipes.push(newRecipeDetails);
    res.status(201).json(newRecipeDetails);
    }
    catch (err)
    {
        next(err);
    }
}