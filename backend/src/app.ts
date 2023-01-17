import express from 'express';
import helmet from 'helmet';
import cors from 'cors'
import companiesRoutes from './routes/companiesRoutes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', companiesRoutes);


export default app;
