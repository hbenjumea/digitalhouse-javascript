// crear un objeto
let persona = {
    nombre : "Hugo",
    apellido : "Benjumea",
    edad : 44,
    coloresFavoritos : ["Azul", "Amarillo"],
    saludar : function name(params) {
        return "Hola soy " + this.nombre;
    }
};

// acceder a las propiedades de un objeto
//console.log(persona.nombre);

// cargar una nueva propiedad
//persona.deporteFavorito = "Futbol"; 
//persona.edad = 45;  
//console.log(persona);

// eliminar una nueva propiedad
//delete persona.deporteFavorito;
//console.log(persona);

// acceder a un metodo de un objeto
//let saludo = persona.saludar();
//console.log(saludo);

// this
persona.nombre = "Andres";
let saludo = persona.saludar();
console.log(saludo);