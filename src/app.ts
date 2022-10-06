require('express-async-errors');
import express, { Express } from 'express';
import { errorMiddleWare } from './middlewares/errorMiddleWare';
import userRoute from './routes/userRoute';

const app: Express = express();

app.use(express.json());

app.use('/user', userRoute);

app.use(errorMiddleWare);

export default app;
