// Ejercicio 1 - validador de contraseña
let contraseña = "123456";

function validador(password) {
    if (password === contraseña) {
        console.log("Contraseña valida");
    }else{
        console.log("Contraseña no valida");
    }
}

//validador("1234567");

// Ejercicio 2 - calculadora de IMC
function getIMC(peso, altura) {
    let heigh = altura / 100;
    let imc = peso / (heigh * heigh);
    console.log(imc);
    if (imc >= 30.0) {
        console.log("Obesidad");
    }else if (imc >= 25.0 ) {
        console.log("Sobrepeso");
    }else if (imc >= 18.5) {
        console.log("Normal");
    }else{
        console.log("Bajo peso");
    }    
}

//getIMC(91, 173);

// Ejercicio 3 - convertir monedas
function convertCoins(cantidad, moneda) {
    
    let tasa;

    switch (moneda) {
        case "dolar":
            tasa = 0.00024;            
            break;
        case "dolarCad":
            tasa = 0.00033;            
            break;
        case "euro":
            tasa = 0.00022;
            break;
    
        default:
            tasa = -1;    
            console.log("Moneda erronea");
            return            
    }

    let result = cantidad * tasa;
    console.log("Cantidad convertida a " + moneda + ": " + result);
}

//convertCoins(500000, "dolar");

// Ejercicio 4 - evaluar edad
function ageRange(age) {
    if (age >= 60) {
        console.log("Adulto mayor");
    } else if (age >= 40) {
        console.log("Adulto");
    } else if (age >= 18) {
        console.log("Adulto joven");
    } else if (age >= 12){
        console.log("Adolescente");
    } else {
        console.log("Niño");
    }
}

//ageRange(44);

// Ejercicio 5 - generador de mensajes
function generateMessages(name, isDay) {
    let message = (isDay) ? `Buenos dias ${name}` : `Buenas tardes ${name}`;
    
    console.log(message);
}

generateMessages("Hugo", false);