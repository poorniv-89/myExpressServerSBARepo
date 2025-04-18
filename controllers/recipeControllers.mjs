
import { recipes } from '../data/recipes.mjs';
export function getAllRecipes(req, res)
{
    res.render('recipes', {recipes});
}
export function getOneRecipeFromUser(req, res)
{
    let userId = req.params.id;
    console.log(userId);
    const recipe = recipes.find(element => element.userId === userId);
    if(recipe)
    {
        res.json(recipe);
    }
    else
    {
        res.status(404).send('Recipe not found');
    }
}
