//Ejercicio 1
const numeros = [5, 10, 15];

console.log(numeros.map(function(numero){
    return numero*2;
}));

//Ejercicio 2
const nombres = [
    "ana",
    "luis",
    "pepe"
];

console.log(nombres.map(function(nombre){
    return nombre.toUpperCase();
}));

//Ejercicio 3
const personajes = [
    {
        nombre: "Guerrero",
        nivel: 5
    },
    {
        nombre: "Mago",
        nivel: 8
    }
];

console.log(personajes.map(function(personaje){
    return `${personaje.nombre} (Nivel ${personaje.nivel})`
}));