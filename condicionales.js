// let edad = 4;

// if(edad >= 18){
//     console.log("Es mayor de edad");
// } else{
//     console.log("Es menor de edad");
// }

// let clima = "soleado";
// let temperatura = 28;
// let mensaje = "";

// if( clima === "soleado" || temperatura > 25){
//     console.log("caluroso");
// }else{
//     console.log("no caluroso");
// }

// let puntuacion = 75;

// if(puntuacion >= 90){
//     console.log("Nota A");
// }else if(puntuacion >= 80){
//     console.log("Nota B");
// }else if(puntuacion >= 70){
//     console.log("Nota C");
// }else{
//     console.log("Nota D");    
// }

// let nota = 8;

// if(nota >= 1 && nota <= 10){
//     if(nota >= 7 && nota <= 10){
//         console.log("Aprobaste");
//     }else{
//         console.log("Reprobaste");
//     }
// }else{
//     console.log("Nota erronea");
// }

//tradicional vs ternario
// let numero = -10;

// if(numero > 0){
//     console.log("positivo");
// }else{
//     console.log("negativo");
// }

// (numero > 0) ? console.log("positivo") : console.log("negativo") ;

//asignacion a variable
// let edad = 30;
// let mensaje = "";

// if(edad >= 18){
//     mensaje = "Es mayor";
// }else{
//     mensaje = "Es menor";
// }

// console.log(mensaje);

// mensaje = (edad >= 18) ? "Es mayor" : "Es menor";

// console.log(mensaje);

//mas de una instruccion
// let edad = 30;
// let mensaje = "";
// let categoria = "";

// if(edad >= 18){
//     mensaje = "Es mayor";
//     categoria = "Adulto";
//     console.log("Felicidades eres mayor");
// }else{
//     mensaje = "Es menor";
//     categoria = "Menor";
//     console.log("Felicidades eres menor");
// }


// (edad >= 18) ? (mensaje = "Es mayor",
//     categoria = "Adulto",
//     console.log("Felicidades eres mayor")) : (
//         mensaje = "Es menor",
//         categoria = "Menor",
//         console.log("Felicidades eres menor"));

// console.log(mensaje);
// console.log(categoria);

//switch
// let diaSemana = 15;
// let mensaje = "";

// switch(diaSemana){
//     case 1:
//         mensaje = "Lunes";
//         break;
//     case 2:
//         mensaje = "Martes";
//         break;
//     case 3:
//         mensaje = "Miercoles";
//         break;
//     case 4:
//         mensaje = "Jueves";
//         break;
//     case 5:
//         mensaje = "Viernes";
//         break;
//     case 6:
//         mensaje = "Sabado";
//         break;
//     case 7:
//         mensaje = "Domingo";
//         break;
//     default:
//         mensaje = "Dia errado";
// }

// console.log(mensaje);

let fruta = "aaa";
let mensaje = "";

switch (fruta) {
    case "manzana":
        mensaje = "Es manzana";
        break;
    case "banana":
        mensaje = "Es banana";
        break;
    case "naranja":
        mensaje = "Es naranja";
        break;

    default:
        mensaje = "Fruta incorrecta";
        break;
}

console.log(mensaje);