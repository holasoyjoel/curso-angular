/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles{
    autor: string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles:{
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const autor = 'Fulano';

const { volumen: vol , segundo , cancion , detalles:{autor: autorDetalle} } = reproductor;

// console.log('El volumne actual es de:' , vol);
// console.log('El segundo actual es de:' , segundo);
// console.log('El cancion actual es:' , cancion);
// console.log('El autor actual es:' , autor);

const dbz: string[] = ['Goku' , 'Vegeta' , 'Krilin'];

const [goku , vegeta , krilin] = dbz;

console.log(`Personaje 1 ${goku}`);
console.log(`Personaje 2 ${vegeta}`);
console.log(`Personaje 3 ${krilin}`);


