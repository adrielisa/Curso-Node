import fs from 'fs';

console.log('================================');
console.log('||        Tabla del 5         ||');
console.log('================================');

if (!fs.existsSync('outputs')) {
    fs.mkdirSync('outputs');
    console.log('📁 Carpeta outputs creada');
}

let contenidoTabla = '';
for (let i = 1; i <= 10; i++) {
    contenidoTabla += `5 x ${i} = ${5 * i}\n`; 
}

console.log(contenidoTabla);

fs.writeFileSync('outputs/tabla-5.txt', contenidoTabla);
console.log('✅ Archivo guardado en: outputs/tabla-5.txt');