import { Producto, calculaISV } from './ejercicios/desestructuracion-funcion.ts';


const carritoCompra: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [total , isv] = calculaISV(carritoCompra);

console.log('Total' , total);
console.log('ISV' , isv);

