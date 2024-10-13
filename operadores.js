//variables
//let resultado;
//let nro = 15;

//resta
//resultado = 10 - 5;
//console.log("El resultado fue: ", resultado);

//multiplicacion
//resultado = nro * nro;
//console.log("El resultado fue: ", resultado);

//division
//resultado = 100 / 2;
//console.log("El resultado fue: ", resultado);

//suma
//resultado = 10 + 10.5;
//console.log("El resultado fue: ", resultado);

//modulo
//resultado = 11 % 2;
//console.log("El resultado fue: ", resultado);

//relacionales < > <= >= == === != !==
//let resultado = 10 >= 10;
//console.log(resultado);

//logicos and &&, or ||, not !

//funciones
//definicion o declaracion
/*function saludar(){
    console.log("Hola!!");
}*/

// function suma(num1, num2){
//     let resultado = num1 + num2;
//     console.log("El resultado es : " + resultado);
// }

// llamado
//saludar();

// suma(10, 5);
// suma(20, 3);
// suma(100, -2);

function suma(nota1, nota2, nota3){
    let resultado = nota1+nota2+nota3;
    return resultado;    
}

function promedio(){
    let resultadoSuma = suma(7,9,8);
    let resultadoPromedio = resultadoSuma / 3;
    return resultadoPromedio;
}

let resultadoProm = promedio();
console.log(resultadoProm);