// Crear un array
// let edades = [24, 37, 18, 59, 7];
//let nombres = ["Juana", "Raul", "Alan"];
// let booleanos = [true, false, false, true];
// let combinados = [15, "Hola", true];
//let numeros = [10, 20, 30, 40, 50];

// Acceder a un elemento especifico
//console.log(edades[1]);

// Recorrer un array
// for (let index = 0; index < edades.length; index++) {
//     const element = edades[index];
//     console.log(element);
// }

// Modificar cada uno de sus elementos a un array e imprimirlos
// for (let index = 0; index < numeros.length; index++) {
//     numeros[index] = index + 1;    
// }

// for (let index = 0; index < numeros.length; index++) {
//     console.log(numeros[index]);    
// }

// Agregar elementos a un array
// let notas = [8,4,10,6];
// notas[notas.length] = 7;
// for (let index = 0; index < notas.length; index++) {
//     console.log(notas[index]);    
// }

// Extraer elementos de un array a una variable
// let nombreSeleccionado = nombres[1];
// console.log(nombreSeleccionado);

// Extraer todos los elemntos para algo especifico
// let sumaNumeros = 0;
// for (let index = 0; index < numeros.length; index++) {
//     sumaNumeros += numeros[index];        
// }

// let promedio = sumaNumeros / numeros.length;
// console.log(promedio);

// Encontrar el mayor o menor
let numeros = [10, 48, 7, 52, 19];

let menor = numeros[0];

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] > menor) {
        menor = numeros[index];
    }    
}

console.log(menor);