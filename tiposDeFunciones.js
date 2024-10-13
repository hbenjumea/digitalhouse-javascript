// Funciones declaradas
// function suma(num1, num2) {
//     return num1 + num2;
// }

// console.log(suma(4,1));

// Funciones expresadas
// let resta = function (num1, num2) {
//     return num1 - num2;
// }

// console.log(resta(5, 1));

// Funciones flecha (Arrow Functions)
// let multiplicacion = (num1,num2) => {
//     return num1 * num2;
// }

// console.log(multiplicacion(4,2));

let objeto = {
    valor: 10,
    /*doble: function () {
        return this.valor * 2;
    }*/
   doble: () => { // esta no funciona con el this
    return this.valor * 2;
   }
}

console.log(objeto.doble());