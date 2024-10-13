let gastosMensuales = [
    [25,51,23,62,87,12,54],
    [47,8,89,58,74,32,85],
    [22,33,44,55,66,77,88],
    [11,56,32,26,78,21,45]
];

function gastosSemana(semana) {
    if (semana < 1 || semana > 4) {
        console.log("Semana errada");
        return -1;
    }
    return gastosMensuales[--semana].reduce(function (acum, dia) {
        return acum + dia;
    });    
}

// let semana = 1;
// let totalSemana = gastosSemana(semana);
// if (totalSemana != -1) {
//     console.log("Gastos semana " + semana + ": " + totalSemana);    
// }

function gastosDias(dia) {
    if (dia < 1 || dia > 7) {
        console.log("Dia errado");
        return -1;
    }
    let diaMatriz = --dia;
    let total = 0;
    for (let i = 0; i < gastosMensuales.length; i++) {
        total += gastosMensuales[i][diaMatriz];        
    }
    return total;
}

// let dia = 1;
// let totalDia = gastosDias(dia);
// if (totalDia != -1) {
//     console.log("Gastos del dia " + dia + ": " + totalDia);    
// }

function gastoTotalMes() {
    let total = 0;
    for (let i = 0; i < gastosMensuales.length; i++) {
        total += gastosSemana(i+1);
    }
    return total;
}

//console.log("Total del mes: " + gastoTotalMes());

// Funcion que recorre array ejecuta un callback
function procesarArray(array, callback) {
    let arraySem = [];
    for (let i = 0; i < array.length; i++) {
        arraySem[i] = callback(array[i]);        
    }
    return arraySem;
}

function arrayGastosSemanas(array) {
    return array.reduce(function (acum, dia) {
        return acum + dia;
    });
}

//console.log("Gastos por semana: " + procesarArray(gastosMensuales,arrayGastosSemanas));

// Funcion que recorre array ejecuta un callback versión 2

function procesarArray2(array, callback) {
    let arraySem = [];
    array.forEach(function (semArray) {
        let semTotal = callback(semArray);
        arraySem.push(semTotal); 
    });
    
    return arraySem;
}

function arrayGastosSemanas2(array) {
    return array.reduce(function (acum, dia) {
        return acum + dia;
    });
}

console.log("Gastos por semana v2: " + procesarArray2(gastosMensuales,arrayGastosSemanas2));
