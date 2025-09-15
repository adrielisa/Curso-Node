import { characters } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destructuring', () => {
    test('Characters shoul contain all expected principal heroes', () =>{
        characters.forEach(hero =>{
            expect(characters).toContain(hero);
        })
    })
});