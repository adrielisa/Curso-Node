const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');
    
const words = content.split(' ');
/*
* * Contar las veces que la palabra react sale en el documento

const reactWordCount = words.filter((word) => word.toLowerCase().includes('react')).length;
*/

//Usando expresión regular


const reactWordCount = content.match(/react/gi ?? []).length;



console.log('Palabras: ', words.length)
console.log('Palabras React: ', reactWordCount);