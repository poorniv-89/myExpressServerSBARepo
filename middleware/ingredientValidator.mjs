export function ingredientValidator(req, res, next) {
    const { recipename, ingredients } = req.body;
    if (!recipename || ingredients.length === 0) {
        return res.status(400).json({
            message: 'Invalid recipe. Name and at least one ingredient are required.',
        });
    }
    next();
}