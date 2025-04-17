
import { recipes } from '../data/recipes.mjs';
function getAllRecipes(req, res, next)
{
    res.send(recipes);
    next();
}
export default getAllRecipes;