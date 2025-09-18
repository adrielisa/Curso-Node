import { getPokemonNameById } from '../../src/js-foundation/06-promise'

describe('js-fundation/06-promises.ts', () => {
    test('getPokemonById shoyld return a 🌱 Pokemon', async () => {
        const pokemonId = 1;
        const pokemonName = await getPokemonNameById(pokemonId);

        expect(pokemonName).toBe('bulbasaur')
    });

    test('getPokemonById shoyld return a 🔥 Pokemon', async () => {
        const pokemonId = 4;
        const pokemonName = await getPokemonNameById(pokemonId);

        expect(pokemonName).toBe('charmander')
    });

    test('should return an error if pokemon does not exist', async () => {
        const pokemonId = 10000;

        try {
            await getPokemonNameById(pokemonId)
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
        }
    });
})