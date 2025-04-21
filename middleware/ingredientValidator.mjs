// Middleware to validate recipe input
export function ingredientValidator(req, res, next) {
    const { recipename, ingredients } = req.body;

    // Check if recipename is missing or ingredients array is empty
    if (!recipename || ingredients.length === 0) {
        return res.status(400).json({
            message: 'Invalid recipe. Name and at least one ingredient are required.',
        });
    }
    // If valid, move to the next middleware or route handler
    next();
}