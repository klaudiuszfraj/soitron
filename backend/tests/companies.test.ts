import request from 'supertest';
import should from "should";
import app from '../src/app';

describe('GET /companies', () => {
    it('success return list of companies', async () => {
        return request(app)
            .get('/companies')
            .expect(({body}) => {
                should(body).be.a.instanceof(Array).and.have.lengthOf(4)
                const [company] = body
                should(company).be.a.instanceof(Object).and.have.property('name', 'Agora')
                should(company).have.property('name', 'Agora')
                should(company).have.property('logo', 'https://placekitten.com/300/300')
                should(company).have.property('services', [
                    "Payroll", "Treasury", "Implementation", "Bank Payments"
                ])
                should(company).have.property('country', 'Poland')
            } )
            .expect(200)
    });
});
