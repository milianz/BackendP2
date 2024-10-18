import express from 'express';
import cors from 'cors';
import itemRoutes from './routes/itemRoutes.js';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/items', itemRoutes);

export default app; 