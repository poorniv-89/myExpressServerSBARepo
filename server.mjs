//importing express
import express from 'express';
import recipeRoutes from './routes/recipeRoutes.mjs';
import commentRoutes from './routes/commentRoutes.mjs'
import userRoutes from './routes/userRoutes.mjs';
import { logger } from './middleware/logger.mjs';
import { errorHandler } from './middleware/errorHandler.mjs';

//setups
const app = express();
const PORT = 3000 || 3001;
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(express.static('public'));

//middleware 
app.use(logger);

//routes
app.use('/recipes', recipeRoutes);
app.use('/comments', commentRoutes);
app.use('/users', userRoutes);

// Adding some HATEOAS links for recipe route .
app.get('/', (req, res, next) => {
    try{
    res.json({
        links: [
            {
                href: '/recipes',
                rel: 'get-all-recipes',
                method: 'GET'
            },
            {
                href: '/recipes',
                rel: 'create-new-recipe',
                method: 'POST',
                body: {
                    userId: 'string',
                    recipename: 'string',
                    ingredients: ['string'],
                    recipe: 'string'
                }
            },
            {
                href: '/recipes/{userId}',
                rel: 'get-recipe-by-id',
                method: 'GET'
            },
            {
                href: '/users',
                rel: 'get-all-users',
                method: 'GET'
            },
            {
                href: '/users?id={userId}',
                rel: 'delete-user-by-id',
                method: 'DELETE'
            },
            {
                href: '/comments',
                rel: 'get-all-comments',
                method: 'GET'
            },
            {
                href: '/comments/{userId}',
                rel: 'get-comments-by-userId',
                method: 'GET'
            },
            {
                href: '/comments/{userId}',
                rel: 'update-comment-by-userId',
                method: 'PATCH',
                body: {
                    comment: 'string'
                }
            }
        ]
    });
}
catch (err)
{
    next(err);
}
});

//error handling middleware
app.use(errorHandler);

//listener
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})