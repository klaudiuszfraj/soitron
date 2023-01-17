import {Request, Response} from 'express';
import data from '../data/data.json'

type CompanyDBType = {
    id: number
    name: string
    logo: string
    services: string[]
    country: string
}
export const getCompanies = async (
    req: Request,
    res: Response<CompanyDBType[]>,
) => res.json(data);