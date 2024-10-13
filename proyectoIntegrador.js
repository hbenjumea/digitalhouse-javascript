const prompt = require("prompt-sync")({ sigint: true });

// Array para almacenar las tareas
let tareas = [];
let categoriasNombres = [
    "Trabajo",
    "Personal",
    // Agregar mas categorias segun sea necesario
];

// Funcion que muestra todas las categorias
function mostrarTodasLasCategorias(params) {
    console.log("Categorias existentes: ");
    categoriasNombres.forEach(function (categoria, indice) {
        console.log(indice + ": " + categoria);
    });
}

// Funcion que sirve para cargar nuevas categorias por el usuario
function agregarNuevasCategorias(nombreCategoria) {
    categoriasNombres.push(nombreCategoria);
    console.log("Categoria: " + nombreCategoria + " agregada correctamente");
}

// Función para agregar una nueva tarea al array
function agregarTarea(nombreTarea, fechaLimiteTarea) {

    mostrarTodasLasCategorias();

    let numeroCategoria = parseInt(prompt("Seleccione la categoria deseada: "));

    if (numeroCategoria >= 0 && numeroCategoria < categoriasNombres.length ) {
        tareas.push({
            nombre : nombreTarea,
            completada : false,
            fechaLimite : fechaLimiteTarea,
            categoria: numeroCategoria
        });
        console.log("Tarea agregada con exito");
    }else{
        console.log("Numero de categoria errado");
    }

    
}

// Eliminar una tarea
function eliminarTarea(posicion) {
    
    if (posicion < 0 || posicion >= tareas.length) {
        console.log("Indice errado.");
        return;
    }

    tareas.splice(posicion, 1);

    console.log("Tarea eliminada correctamente.");
}

// Marcar una tarea como completada

function completarTarea(posicion) {
    if (posicion < 0 || posicion >= tareas.length) {
        console.log("Indice errado.");
        return;
    }

    tareas[posicion].completada = true;

    console.log("Tarea completada correctamente.");
}

// Modificar una tarea 

function modificarTarea(posicion, propiedad, valor) {
    if (posicion < 0 || posicion >= tareas.length) {
        console.log("Indice errado.");
        return;
    }

    switch (propiedad) {
        case "nombre":
            tareas[posicion].nombre = valor;
            console.log("Propiedad nombre modificada");
            break;
    
        case "completada":
            tareas[posicion].completada = valor;
            console.log("Propiedad completada modificada");
            break;
    
        case "fechaLimite":
            tareas[posicion].fechaLimite = valor;
            console.log("Propiedad fechaLimite modificada");
            break;
    
        default:
            console.log("Propiedad errada.");
            break;
    }
}

function modificarTarea2(indice, nuevoNombre, nuevaFechaLimite = null, nuevoNumeroCategoria) {
    
    if (posicion < 0 || posicion >= tareas.length) {
        console.log("Indice errado.");
        return;
    }

    tareas[indice].nombre = nuevoNombre !== undefined ? nuevoNombre : tareas[indice].nombre;
    tareas[indice].fechaLimite = nuevaFechaLimite !== undefined ? nuevaFechaLimite : tareas[indice].fechaLimite;
    tareas[indice].categoria = nuevoNumeroCategoria !== undefined ? nuevoNumeroCategoria : tareas[indice].categoria;
    
    console.log("Tarea modificada correctamente");
}

// Funcion que filtra tareas por categoria
function filtrarTareasPorCategoria(numeroCategoria) {
    let tareasFiltradas = tareas.filter(function (tarea) {
        return tarea.categoria === numeroCategoria;
    });
    return tareasFiltradas;
}

// Funcion que muestra cantidad de tareas completadas
function tareasCompletadasCategorias(numeroCategoria) {
    let tareasCategorias = filtrarTareasPorCategoria(numeroCategoria);
    let tareasCompletadas = tareasCategorias.reduce(function (contador, tarea) {
        return tarea.completada ? contador + 1 : contador;  
    }, 0);

    let tareasEnTotal = tareasCategorias.length;

    console.log("Tareas completadas de la categoria " + numeroCategoria + ": " + tareasCompletadas + " de " + tareasEnTotal + " tareas!");
}

// Funcion que muestra las tareas no completadas
function tareasNoCompletadas() {
    console.log("Tareas no completadas: ");
    tareas.forEach(function (tarea) {
        if (!tarea.completada) {
            console.log("- Nombre: " + tarea.nombre + ", Categoria: " + categoriasNombres[tarea.categoria])
        }
    });
}

// Funcion para mostrar menu
function mostrarMenu() {
    console.log(" --- MENU ---");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcra tarea como completada");
    console.log("4. Modificar una tarea");
    console.log("5. Mostrar todas las tares");
    console.log("6. Mostrar todas las categorias");
    console.log("7. Agregar una categoria");
    console.log("8. Filtrar tareas por categoria");
    console.log("9. Visualizar cantidad de tareas completadas por categoria");
    console.log("10. Visualizar todas las tareas no completadas");
    console.log("0. Salir");    
}

// Funcion para interactuar con el usuario
function interactuarConUsuario(params) {
    let opcion = -1;

    while (opcion != 0) {
        mostrarMenu();
        opcion = parseInt(prompt("Indique la opción seleccionada: ")); 
        switch (opcion) {
            case 1:
                let nombreTareaNueva = prompt("Ingrese el nombre de la tarea a cargar: ");
                agregarTarea(nombreTareaNueva);
                break;
            case 2:
                let indiceAEliminar = parseInt(prompt("Ingrese el indice de la tarea a eliminar: "));
                eliminarTarea(indiceAEliminar);
                break;
            case 3:
                let indiceACompletar = parseInt(prompt("Ingrese el indice de la tarea a completar: "));
                completarTarea(indiceACompletar);
                break;
            case 4:
                let indiceAModificar = parseInt(prompt("Ingrese el indice de la tarea a modificar: "));
                if (posicion < 0 || posicion >= tareas.length) {
                    console.log("Indice errado.");
                    break;
                }
                let opcionAModificar = parseInt(prompt("Que desea modificar?: 1. Nombre, 2. Fecha, 3. categoria"));
                switch (opcionAModificar) {
                    case 1:
                        let nuevoNombreTarea = prompt("Ingrese el nombre de la tarea a modificar: ");
                        modificarTarea2(indiceAModificar, nuevoNombreTarea);
                        break;
                    case 2:
                        let nuevaFecha = prompt("Ingrese la fecha de la tarea a modificar: ");
                        modificarTarea2(indiceAModificar, undefined, nuevaFecha);
                        break;
                    case 3:
                        mostrarTodasLasCategorias();
                        let nuevaCategoria = parseInt(prompt("Ingrese la categoria de la tarea a modificar: "));
                        if (nuevaCategoria >= 0 && nuevaCategoria < categoriasNombres.length) {
                            modificarTarea2(indiceAModificar, undefined, undefined, nuevaCategoria);
                        }else{
                            console.log("Categoria errada");
                        }                        
                        break;
                
                    default:
                        break;
                }
                
                break;
            case 5:
                console.log("Lista de tareas:");
                console.log(tareas);                
                break;
            case 6:
                mostrarTodasLasCategorias();                
                break;
            case 7:
                let nuevaCategoria = prompt("Ingrese el nombre de la nueva categoria a agregar: ");
                agregarNuevasCategorias(nuevaCategoria);                
                break;            
            case 8:
                mostrarTodasLasCategorias();
                let filtroCategoria = parseInt(prompt("Ingrese el nombre de la categoria para filtrar: "));
                if (filtroCategoria >= 0 && filtroCategoria < categoriasNombres.length) {
                    let tareasCategoria = filtrarTareasPorCategoria(filtroCategoria);
                    console.log("Tareas de las categoria: " + filtroCategoria);
                    console.log(tareasCategoria);
                }else{
                    console.log("Categoria errada");
                }
                break;            
            case 9:
                mostrarTodasLasCategorias();
                let numCategoria = parseInt(prompt("Ingrese el nombre de la categoria a visualizar: "));
                if (numCategoria >= 0 && numCategoria < categoriasNombres.length) {
                    tareasCompletadasCategorias(numCategoria);
                }else{
                    console.log("Categoria errada");
                }
                break;  
            case 10:
                tareasNoCompletadas();
                break;            
            case 0:
                console.log("Hasta luego");
                break;
        
            default:
                console.log("Opción invalida");
                break;
        }
    }
}

interactuarConUsuario();