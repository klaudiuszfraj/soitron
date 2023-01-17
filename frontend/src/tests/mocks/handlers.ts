import { rest } from 'msw';
import responses from './responses.json';

export const handlers = [
    rest.get(`http://localhost:8080/companies`, (req, res, context) => {
        return res(context.json(responses.companies))
        }
    ),
];
