let array = [14,3,51,7,92,110,5,17,13,48];
let elementoBuscado = 3;

function busquedaLineal(arr, elemento) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === elemento) {
            return index;
        }
    }
    return -1;
}

console.log(busquedaLineal(array, elementoBuscado));