import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory.ts', () =>{
    const getUUID = () => '1234';
    const getAge = () => 20;

    test('BuildMakePerson should return a function', () =>{
        const makePerson = buildMakePerson({getUUID, getAge});

        expect(typeof makePerson).toBe('function');
    });

    test('makePerson should return a person', () =>{
        const person = {name: 'John Doe', birthdate: '1985-10-21'}

        const makePerson = buildMakePerson({getUUID, getAge});
        const johnDoe = makePerson(person)

        expect(johnDoe).toEqual({
            id: '1234',
            name: 'John Doe',
            birthdate: '1985-10-21',
            age: 20});
    });
});