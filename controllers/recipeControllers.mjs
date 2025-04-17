
import { recipes } from '../data/recipes.mjs';
function getAllRecipes(req, res, next)
{
    res.render('recipes', {recipes});
}
export default getAllRecipes;