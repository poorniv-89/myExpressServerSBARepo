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
app.get('/', (req, res) => {
    res.json({
        links: [
            {
                href: '/recipes',
                rel: 'recipes',
                method: 'GET',
            },
            {
                href: '/recipes/',
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
                href: '/recipes/{id}',
                rel: 'get-recipe-by-id',
                method: 'GET'
            }
        ]
    });
});


//error handling middleware
app.use(errorHandler);

app.get('/recipes', (req, res) => {
    res.render('recipes');
});

//test route for server
app.get('/', (req, res) => {
    res.send('Server is sending a response');
})

//listener
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})