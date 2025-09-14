interface Friv {
    id: number;
    nombre: string;
    edad: number;
    posicion: string;
    estado: 'Activo' | 'Caído';
}

export const juegosFriv: Friv[] = [
    {
        id:1,
        nombre: 'Llovera León Bruno',
        edad: 20,
        posicion: 'Líder Friv',
        estado: 'Activo'
    },
    {
        id: 2,
        nombre: 'Mezquita Uc Bryan Eduardo',
        edad: 20,
        posicion: 'Miembro fundador',
        estado: 'Caído'
    },
    {
        id: 3,
        nombre: 'Rodriguez Pacheco Adriel Isai',
        edad: 20,
        posicion: 'Miembro fundador',
        estado: 'Activo' 
    },
    {
        id: 4,
        nombre: 'Gonzalez Cruz Celeste',
        edad: 21,
        posicion: 'Miembro',
        estado: 'Activo'
    }
]

