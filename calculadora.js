const prompt = require("prompt-sync")({ sigint: true });

function suma(num1, num2) {
    return num1 + num2;    
}

function resta(num1, num2) {
    return num1 - num2;    
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 === 0) {
        return "Division por cero";
    } else {
        return num1 / num2;
    } 
}

console.log("Bienvenido a su calculadora digital!");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");

let opcion = parseInt(prompt("Indique que operación desea realizar: "));
let numero1;
let numero2;
let resultado;

switch (opcion) {
    case 1:
        numero1 = parseInt(prompt("Indique el primer numero a sumar: "));
        numero2 = parseInt(prompt("Indique el segundo numero a sumar: "));
        resultado = suma(numero1, numero2);
        console.log("La suma es : " + resultado);
        break;
    case 2:
        numero1 = parseInt(prompt("Indique el primer numero a restar: "));
        numero2 = parseInt(prompt("Indique el segundo numero a restar: "));
        resultado = resta(numero1, numero2);
        console.log("La resta es : " + resultado);
        break;
    case 3:
        numero1 = parseInt(prompt("Indique el primer numero a multiplicar: "));
        numero2 = parseInt(prompt("Indique el segundo numero a multiplicar: "));
        resultado = multiplicar(numero1, numero2);
        console.log("La multiplicacion es : " + resultado);
        break;
    case 4:
        numero1 = parseInt(prompt("Indique el primer numero a dividir: "));
        numero2 = parseInt(prompt("Indique el segundo numero a dividir: "));
        resultado = dividir(numero1, numero2);
        if (typeof resultado == "string") {
            console.log(resultado);
        }else{
            console.log("La dividision es : " + resultado);
        }
        
        break;
    case 5:
        let a = 2;
        let b = '3';
        console.log(a + b);
        break;

    default:
        console.log("Ingreso una opcion no valida.");
        break;
}