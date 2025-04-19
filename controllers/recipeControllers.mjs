import { recipes } from '../data/recipes.mjs';
export function getAllRecipes(req, res)
{
    res.render('recipes', {recipes});
}
export function getOneRecipeFromUser(req, res)
{
    let userId = req.params.id;
    console.log(userId);
    const recipe = recipes.filter(element => element.userId === userId);
    if(recipe.length  > 0)
    {
        res.json(recipe);
    }
    else
    {
        res.status(404).send('Recipe not found');
    }
}

export function postNewRecipe(req, res)
{
    const newRecipeDetails = req.body;
    newRecipeDetails.id = recipes.length+1;
    recipes.push(newRecipeDetails);
    res.status(201).json(newRecipeDetails);
}