import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
// initialise express
const app=express();

app.use(cors());
app.use(express.json());
app.use('/', router);

const PORT=8000;

DBConnection();

// start server
// after running the server we can make any work so use callback fn
app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`));