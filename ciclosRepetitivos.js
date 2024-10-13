const prompt = require("prompt-sync")({ sigint: true });

// while
// let control = "si";
// let nota;
// let sumaNotas = 0;
// let cant = 0;
// console.log("Bienvenido al registro de notas!");

// let contar = 0;
// while (control === "si") {
//     console.log("Ingrese una nota a sumar:");
//     nota = parseInt(prompt("Nota alumno: "));

//     sumaNotas += nota;    
//     cant++;

//     control = prompt("Ingrese 'si' si desea agregar más notas, o 'no' si no desea agregar mas notas: ");
// }

// let promedio = sumaNotas / cant;
// console.log("Promedio: " + promedio);

// dowhile
// let numeroAAdivinar = 4;
// let intento = 0;
// let numero;

// let i = 1;
// do {
//     numero = parseInt(prompt("Ingrese un numero del 1 al 10: "));
//     if (numero < numeroAAdivinar) {
//         console.log("Muy bajo, ingrese nuevamente");    
//     }else if(numero > numeroAAdivinar){
//         console.log("Muy alto, ingrese nuevamente");    
//     }else{
//         console.log("Numero correcto");    
//     }
    
//     intento++;
// } while (numero != numeroAAdivinar);

// console.log("Cantidad de intentos: " + intento);

// for
for (let index = 0; index < 10; index++) {
    
    console.log(index);
}
