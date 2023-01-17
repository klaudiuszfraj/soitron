"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const should_1 = __importDefault(require("should"));
const app_1 = __importDefault(require("../src/app"));
describe('GET /companies', () => {
    it('success return list of companies', () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, supertest_1.default)(app_1.default)
            .get('/companies')
            .expect(({ body }) => {
            (0, should_1.default)(body).be.a.instanceof(Array).and.have.lengthOf(4);
            const [company] = body;
            (0, should_1.default)(company).be.a.instanceof(Object).and.have.property('name', 'Agora');
            (0, should_1.default)(company).have.property('name', 'Agora');
            (0, should_1.default)(company).have.property('logo', 'https://placekitten.com/300/300');
            (0, should_1.default)(company).have.property('services', [
                "Payroll", "Treasury", "Implementation", "Bank Payments"
            ]);
            (0, should_1.default)(company).have.property('country', 'Poland');
        })
            .expect(200);
    }));
});
