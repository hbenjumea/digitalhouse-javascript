// Ejercicio 1 - unir dos arrays
function unirArrays(array1, array2) {
    return array1.concat(array2);
}

let numeros1 = [1, 2, 3];
let numeros2 = [5, 6, 7];
let arrayResult = unirArrays(numeros2, numeros1);
//console.log(arrayResult);

// Ejerciciio 2 - elminar primer elemento

function eliminarPrimerElemento(array1) {
    return array1.shift();
}

let first = eliminarPrimerElemento(numeros2);
//console.log(numeros2);
//console.log(first);

// Ejercicio 3 - convertir texto

function convertirTexto(texto) {
    let textoMayuscula = texto.toUpperCase();
    let textoMinuscula = texto.toLowerCase();

    console.log("textoMayuscula: " + textoMayuscula);
    console.log("textoMinuscula: " + textoMinuscula);
}

//convertirTexto("qwerty");

// Ejercicio 4 - manipulacion de objetos
let persona = {
    nombre : "Hugo",
    edad : 44,
    ocupacion : "Ingeniero"
};

function verObjeto(objeto1) {
    console.log("Nombre: " + objeto1.nombre);
    console.log("Edad: " + objeto1.edad);
    console.log("Ocupación: " + objeto1.ocupacion);
    console.log("Habilidad: " + objeto1.habilidad);
}

persona.ocupacion = "Diseñador";
persona.habilidad = "JavaScript";

//verObjeto(persona);

// Ejercicio 5 - objetos anidados
persona.ubicacion = {
    codigoPostal : "7600",
    ciudad : "Barranquilla",
    calle : "Calle ppal",
    numero : 123
}

function eliminarPropiedad(objeto, propiedad) {
    switch (propiedad) {
        case "nombre":
            delete objeto.nombre;
            break;
        case "edad":
            delete objeto.edad;
            break;
        case "ocupacion":
            delete objeto.ocupacion;
            break;
        case "habilidad":
            delete objeto.habilidad;
            break;
        case "ubicacion":
            delete objeto.ubicacion;
            break;
    
        default:
            console.log("Propiedad erronea.");
            break;
    }
}

eliminarPropiedad(persona, "nombre");
console.log(persona);