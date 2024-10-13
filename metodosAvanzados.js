/* .slice()
Sintaxis: let newArray = arrayOriginal.slice(inicio, fin);
*/

let frutas = ["Manzana", "Naranja", "Platano", "Fresa", "Kiwi"];

let primerasTres = frutas.slice(0, 3);
// console.log(primerasTres);

let desdeNaranja = frutas.slice(1);
// console.log(desdeNaranja);

let ultimasDos = frutas.slice(-2);
// console.log(ultimasDos);

let entreDosIndices = frutas.slice(-3, 4);
// console.log(entreDosIndices);

/* .splice()
Sintaxis: arrayOriginal.splice(inicio, cantidadAEliminar, elemento1, elemento2, ...);
*/

let meses = ["Ene", "Feb", "Mar", "Abr", "May"];

// meses.splice(1, 2, "Nuevo1", "Nuevo2");
// console.log(meses);

meses.splice(2, 0, "Nuevo3");
// console.log(meses);

/*.sort()
arrayOriginal.sort();
*/

// let numeros = [5,4,1,8,6,9];
// numeros.sort();
// console.log(numeros);

let palabras = ["perro", "gato", "auto", "zorro"];
palabras.sort();
// console.log(palabras);

/* .find()
Sintaxis: let resultado = arrayOriginal.find(funcionDePrueba(elemento));
*/

// let edades = [25,18,30,15,22];

// let mayorEdad = edades.find(edad => edad >= 18);
// console.log(mayorEdad);

// let primeraEdadMayor = edades.find(edad => edad > 30);
// console.log(primeraEdadMayor);

// .map()

let numeros = [2,4,6];

let numerosMultiplicados = numeros.map(function (num) {
    return num * 2;
});

// console.log(numeros);
// console.log(numerosMultiplicados);
// console.log(numeros);

// .filter()

let edades = [25,18,30,15,22];

let mayores = edades.filter(function (edad) {
    return edad > 18;
});

// console.log(mayores);

// .reduce()

let nums = [5,7,16];

let suma = nums.reduce(function (acum, num) {
    return acum - num;
});

// console.log(suma);

// .forEach()

let paises = ["Argentina", "Colombia", "Brasil"];

paises.forEach(function (pais) {
    console.log(pais);
});