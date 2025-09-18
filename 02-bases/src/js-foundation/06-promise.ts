import { httpClientPlugin as http } from '../plugins/http-client'

/*
* Promesa usando fetch
const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch(url)
        .then((response) => response.json())
        .then((pokemon) => pokemon.name);
}

module.exports = getPokemonById;
*/

// *Promesa usando async/await

export const getPokemonNameById = async (id: string | number): Promise<string> => {
    
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await http.get(url);
        return pokemon.name;

    } catch (error){
        throw `Pokemon not found with id ${id}`
    }  
}


