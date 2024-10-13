//Crear una matriz
// Opcion 1
let matriz = [
    [1,2,3], 
    [4,5]
];

// Opcion 2
// let arrayMatriz = [];

// let fila1 = ["x0", "x1", "x2"];
// let fila2 = ["y0", "y1", "y2"];

// arrayMatriz[0] = fila1;
// arrayMatriz[1] = fila2;

//Viusalizar una matriz
console.table(matriz);

// Acceder a un elemento especifico
//console.log(matriz[2][1]);

// Modificar un elemento especifico
// matriz[0][1] = 15;
// console.table(matriz);

// Recorrer una columna especifica
// for (let index = 0; index < matriz.length; index++) {
//     console.log(matriz[index][0]);    
// }

// Recorrer una fila especifica
// for (let index = 0; index < matriz[0].length; index++) {
//     console.log(matriz[0][index]);    
// }

//Recorrer la totalidad de datos de la matriz
// for (let i = 0; i < matriz.length; i++) { // for para las filas
//     for (let j = 0; j < matriz[i].length; j++) { // for para las columnas
//         console.log(matriz[i][j]);        
//     }    
// }

// filtrar en matrices
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const element = matriz[i][j];
        if (element % 2 == 0) {
            console.log(element);
        }        
    }    
}