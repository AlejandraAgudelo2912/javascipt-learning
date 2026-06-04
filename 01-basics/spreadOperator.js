//Ejercicio 1
const numeros = [10, 20, 30];

const numerosNuevo =[...numeros, 40];

console.log(numerosNuevo);

//Ejercicio 2
const frutas = [
    "Manzana",
    "Pera"
];

const frutas2 = [
    "Plátano",
    "Naranja"
];

const frutas3 = [...frutas, ...frutas2];
console.log(frutas3);

//Ejercicio 3
const personaje = {
    nombre: "Guerrero",
    nivel: 5
};

const personajeMejorado = {
    ...personaje,
    nivel: 6,
    vida: 100
};

console.log(personajeMejorado);