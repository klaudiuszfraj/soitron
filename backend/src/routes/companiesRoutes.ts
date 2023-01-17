import express from 'express';
import { getCompanies } from '../controllers/companies';

const router = express.Router();

router.get('/companies', getCompanies);

export default router;
