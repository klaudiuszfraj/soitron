import request from 'supertest';
import should from "should";
import app from '../src/app';

describe('GET /fake-url', () => {
    it('success return list of companies', async () => {
        return request(app)
            .get('/fake-url')
            .expect(404)
    });
});
