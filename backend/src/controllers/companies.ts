import {Request, Response} from 'express';
import data from '../data/data.json'
export const getCompanies = async (
    req: Request,
    res: Response,
) => res.json(data);