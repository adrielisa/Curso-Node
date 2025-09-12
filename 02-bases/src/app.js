//const {emailTemplate} = require('./js-foundation/01-template')
//require('./js-foundation/02-destructuring');

//console.log(emailTemplate);

/*

const {getUserByID} = require('./js-foundation/04-arrow');

const id = 1;

getUserByID( id,  (error, user) => {
    if (error) {
        throw new Error('User not found with id', id);
    }

    console.log(user)
})


const { getAge, getUUID } = require('./plugins')

const { buildMakePerson } = require('./js-foundation/05-factory')

*/

// !Referencia a Factory Function y su uso
/*

const makePerson = buildMakePerson({ getUUID, getAge });

const obj = {name: 'Brissa Itzel Chan Jiménez', birthdate: '2005-11-14'}

const Adriel = makePerson (obj)

console.log(Adriel)

*/

// !Promesas - PokeAPI
/*
const getPokemonById = require('./js-foundation/06-promise')

getPokemonById(4)
    .then((pokemon) => console.log({ pokemon }))
    .catch((err) => console.log('Por favor intente de nuevo'))
    .finally(() => console.log('Proceso terminado'));
*/

const { buildLogger } = require('./plugins')

const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Esto es algo critico');

