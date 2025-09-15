/*
const bluePeriodCharacters = [
    {
        id: 1,
        name: 'Yatora Yaguchi',
        age: 21
    },
    {
        id: 2,
        name: 'Maru Mori',
        age: 22
    },
    {
        id: 3,
        name: 'Ryuji Ayukawa',
        age: 21
    }
]

function getUserByID( id ){
    return users.find(user => user.id === id);
}

function getBluePeriodByName( name ){
    return bluePeriodCharacters.find(user => user.name === name)
}
*/

interface User {
    id: number;
    name: string;
}
export const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];

export function getUserByIDCallback (id: number, callback: (err?: string, user?:User) => void){
    const user = users.find (function(user){
        return user.id === id;
    });

    if (!user ) {
        return callback(`User not found with id ${id}`);
    }

    return callback(undefined, user);
}

/*
function getBluePeriodByAge(age){
    const user = bluePeriodCharacters.find(function(user){
        return user.age = age;
    });
    
    console.log({user});
}

getBluePeriodByAge(21);

*/
