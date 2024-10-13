let arreglo = [1,2,3,4,5,6,7];
let numeroABuscar = 50;

function busquedaBinaria(array, valorBuscado) {
    let indiceInicio = 0;
    let indiceFin = array.length -1;
    while (indiceInicio <= indiceFin) {
        const INDICEMITAD = Math.round((indiceFin + indiceInicio)/2);
        const ELEMENTOMEDIO = array[INDICEMITAD];
        if (ELEMENTOMEDIO === valorBuscado) {
            return INDICEMITAD;
        }

        if (ELEMENTOMEDIO > valorBuscado) {
            indiceFin = INDICEMITAD - 1;
        }else{
            indiceInicio = INDICEMITAD + 1;
        }
    }
    return null;
}

let indiceEncontrado = busquedaBinaria(arreglo, numeroABuscar);
console.log(indiceEncontrado);