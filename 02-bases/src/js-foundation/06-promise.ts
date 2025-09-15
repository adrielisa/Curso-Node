const {http} = require('../plugins')

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

const getPokemonById = async (id: number) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);
    return pokemon.name;
}

module.exports = getPokemonById;
