//importing express
import express from 'express';
import recipeRoutes from './routes/recipeRoutes.mjs';
import commentRoutes from './routes/commentRoutes.mjs'

//setups
const app = express();
const PORT = 3000 || 3001;
app.use(express.json());

//middleware 
app.use('/recipes', recipeRoutes);
app.use('/comments', commentRoutes);

//test route for server
app.get('/', (req, res)=>{
    res.send('Server is sending a response');
})

//listener
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})