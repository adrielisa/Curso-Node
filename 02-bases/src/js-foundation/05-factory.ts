//const {getIDPlugin} = require('../plugins/get-id.plugin')
//const { getAge } = require('../plugins/get-age.plugin')
//const { getAge, getUUID} = require('../plugins')

interface Person {
    id: string;
    name: string;
    birthdate: string;
    age: number;
}

interface PersonInput {
    name: string;
    birthdate: string;
}

interface Dependencies {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

const buildMakePerson = ({getUUID, getAge }: Dependencies) => {
    return ({ name, birthdate }: PersonInput): Person => {
        return {
            id: getUUID(),
            name: name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}

module.exports = {
    buildMakePerson,
}

/*
const obj = { name: 'Adriel Isai Rodriguez Pacheco', birthdate: '2005-04-15', hooby: 'Coding' }
const Adri = buildPerson(obj);

console.log(Adri);

/*
    * *NOTES
    when we use ({name, birthday}) we are destructuring something, in this case ou function is ready to receive an objet, so
    we can desesctruturing it and get only the name and birthday.

    We can use both of these, it depends of what we like
    name: name,
    birthday
*/

