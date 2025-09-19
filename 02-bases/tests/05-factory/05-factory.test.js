"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _05_factory_1 = require("../../src/js-foundation/05-factory");
describe('js-foundation/05-factory.ts', () => {
    const getUUID = () => '1234';
    const getAge = () => 20;
    test('BuildMakePerson should return a function', () => {
        const makePerson = (0, _05_factory_1.buildMakePerson)({ getUUID, getAge });
        expect(typeof makePerson).toBe('function');
    });
    test('makePerson should return a person', () => {
        const person = { name: 'John Doe', birthdate: '1985-10-21' };
        const makePerson = (0, _05_factory_1.buildMakePerson)({ getUUID, getAge });
        const johnDoe = makePerson(person);
        expect(johnDoe).toEqual({
            id: '1234',
            name: 'John Doe',
            birthdate: '1985-10-21',
            age: 20
        });
    });
});
