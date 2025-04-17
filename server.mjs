//importing express
import express from 'express';

//creating an instance
const app = express();

const PORT = 3000 || 3001;

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})