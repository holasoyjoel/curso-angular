/*
    ===== Código de TypeScript =====
*/
function sumarFuncion(a, b) {
    return a + b;
}
function multiplicar(numero, base, otroNumero) {
    if (base === void 0) { base = 2; }
    return numero * base;
}
function curar(personaje, curarX) {
    personaje.pv += curarX;
}
var nuevoPersonaje = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp: function () {
        console.log('Puntos de vida:', this.pv);
    }
};
curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();
