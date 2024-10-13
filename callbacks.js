// Funcion que recorre array ejecuta un callback
function procesarArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
        
    }
}

// Funcion de callback que muestre los elementos de un array
function mostrarElemento(elemento){
    console.log(elemento);
}

// Funcion de callback que multiplica por dos los elementos de un array
function multiplicarPorDos(elemento) {
    console.log(elemento * 2);
}

// Funcion de callback que calcula el cuadrado de los elementos de un array
function cuadrado(elemento) {
    console.log(elemento * elemento);
}

// Crear nuestro array
let miArray = [1,2,3,4,5];

// LLamada a la funcion procesarArray
console.log("Mostrar");
procesarArray(miArray, mostrarElemento);
console.log("Multiplicar");
procesarArray(miArray, multiplicarPorDos);
console.log("Cuadrado");
procesarArray(miArray, cuadrado);
