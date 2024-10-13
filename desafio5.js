// 1. BubbleSort: Crea una función que reciba por parámetro un array de números y los ordene de menor a mayor mediante el ordenamiento burbuja.
function bubbleSort(array) {
    for (let j = 0; j < array.length; j++) {
        for (let index = 0; index < array.length-1-j; index++) {
            if (array[index] > array[index+1]) {                
                let temp = array[index];
                array[index] = array[index+1];
                array[index+1] = temp;
            }
        }    
    }
    console.log(array);
}

//let numbers = [8,2,5,3,9,7];

//bubbleSort(numbers);

// 2. Indicar ordenamiento: Crea una función que reciba por parámetro un array de números e indique si el array se encuentra ordenado de forma ascendente o no.
function isSorted(array) {
    for (let j = 0; j < array.length; j++) {
        for (let index = 0; index < array.length-j; index++) {
            if (array[index] > array[index+1]) {                
                return false;
            }
        }    
    }
    return true;
}

//let numbers = [8,2,5,3,9,7];
//let numbers = [2,3,5,7,8,9];

//console.log(isSorted(numbers));

// 3. Contar la cantidad de veces que aparece un número en un array: Crea una función que reciba por parámetro un número y un array de números, y devuelva la cantidad de veces que aparece 
// ese número en el array utilizando búsqueda lineal.
function linealSearchCount(arr, elemento) {
    let counter = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === elemento) {
            counter++;
        }
    }
    return counter;
}

//let array = [14,3,51,7,92,110,3,17,3,3];
//let elementoBuscado = 2;

//console.log(linealSearhCount(array, elementoBuscado));

// 4. Obtener votos: Dado un array con los datos de una encuesta realizada sobre los temas musicales más populares —lo que se tiene en el array son objetos definidos con el nombre de un 
// tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5 temas y una cantidad de votos para cada uno. Los votos obtenidos deben estar desordenados. Una vez creado 
// el array, se deberá escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo, considerando: 

// 5. Resolverlo aplicando búsqueda lineal.

let themes = [
    {
        name: "Lautaro",
        vote: 25
    },
    {
        name: "Morena",
        vote: 17
    },
    {
        name: "Daniela",
        vote: 50
    },
    {
        name: "Soltera",
        vote: 40
    },
    {
        name: "Lambada",
        vote: 30
    }
];

function linealSearchTheme(themeName) {    
    for (let index = 0; index < themes.length; index++) {
        if (themes[index].name === themeName) {
            return themes[index].vote;
        }
    }    
    return -1;
}

//console.log(linealSearchTheme("Soltera"));

// 6. Resolverlo aplicando búsqueda binaria.
function bubbleSortTheme() {
    for (let j = 0; j < themes.length; j++) {
        for (let index = 0; index < themes.length-1-j; index++) {
            if (themes[index].name > themes[index+1].name) {                
                let temp = themes[index];
                themes[index] = themes[index+1];
                themes[index+1] = temp;
            }
        }    
    }    
}

function binarySearchTheme(themeName) {
    let indiceInicio = 0;
    let indiceFin = themes.length -1;
    while (indiceInicio <= indiceFin) {
        const INDICEMITAD = Math.round((indiceFin + indiceInicio)/2);
        const ELEMENTOMEDIO = themes[INDICEMITAD];
        if (ELEMENTOMEDIO.name === themeName) {
            return ELEMENTOMEDIO.vote;
        }

        if (ELEMENTOMEDIO.name > themeName) {
            indiceFin = INDICEMITAD - 1;
        }else{
            indiceInicio = INDICEMITAD + 1;
        }
    }
    return null;
}

bubbleSortTheme();
console.log(binarySearchTheme("Lambada"));