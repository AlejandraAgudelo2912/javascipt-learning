//Ejercicio 1
const multiplicar = (a, b) => a*2;
console.log(multiplicar(4, 2));

//Ejercicio 2
const nombres = [
    "ana",
    "luis",
    "pepe"
];

const mayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log(mayusculas);

//Ejercicio 3
const numeros = [1, 2, 3, 4, 5];

console.log(numeros.filter(numero => numero % 2 === 0));