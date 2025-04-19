//importing express
import express from 'express';
import recipeRoutes from './routes/recipeRoutes.mjs';
import commentRoutes from './routes/commentRoutes.mjs'
import userRoutes from './routes/userRoutes.mjs';
import { logger } from './middleware/logger.mjs';

//setups
const app = express();
const PORT = 3000 || 3001;
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());

//middleware 
app.use(logger);
app.get('/', (req, res)=>{
    res.send('Server is sending a response');
})
app.use('/recipes', recipeRoutes);
app.use('/comments', commentRoutes);
app.use('/users', userRoutes);

//test route for server


//listener
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})