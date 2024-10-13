let array = [
    {
        nombre: "Lautaro",
        edad: 25
    },
    {
        nombre: "Morena",
        edad: 17
    },
    {
        nombre: "Daniela",
        edad: 50
    }
];

for (let j = 0; j < array.length; j++) {
    for (let index = 0; index < array.length-1; index++) {
        if (array[index].nombre > array[index+1].nombre) {
            let temp = array[index];
            array[index] = array[index+1];
            array[index+1] = temp;
        }
    }    
}

console.log(array);