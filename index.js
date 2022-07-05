var pasajero1 = {
    nombre: 'Fernando'
};
var pasajero2 = {
    nombre: 'Melisa',
    hijos: ['Natalia', 'Gabriel']
};
function imprimeHijos(pasajero) {
    var _a;
    var cuantosHijos = ((_a = pasajero.hijos) === null || _a === void 0 ? void 0 : _a.length) || 0;
    console.log(cuantosHijos);
}
imprimeHijos(pasajero1);
