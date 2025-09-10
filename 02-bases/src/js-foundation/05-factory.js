const buildPerson = ({ name, birthdate }) => {

    return {
        id: new Date().getTime(),
        name: name,
        birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    }
}

const obj = { name: 'Adriel Isai Rodriguez Pacheco', birthdate: '2005-04-15', hooby: 'Coding' }
const Adri = buildPerson(obj);

console.log(Adri)

/*
    * *NOTES
    when we use ({name, birthday}) we are destructuring something, in this case ou function is ready to receive an objet, so
    we can desesctruturing it and get only the name and birthday.

    We can use both of these, it depends of what we like
    name: name,
    birthday

*/