//Ejercicio 1
const numeros = [5, 10, 15, 20, 25];

console.log(numeros.filter(function(numero){
    return numero>15;
}));

//Ejercicio 2
const videojuegos = [
    {
        nombre: "Minecraft",
        horas: 500
    },
    {
        nombre: "Terraria",
        horas: 100
    },
    {
        nombre: "Stardew Valley",
        horas: 250
    }
];

console.log(videojuegos.filter(function(videojuego){
    return videojuego.horas>200;
}));

//Ejercicio 3
const personajes = [
    {
        nombre: "Guerrero",
        nivel: 5
    },
    {
        nombre: "Mago",
        nivel: 10
    },
    {
        nombre: "Arquero",
        nivel: 3
    }
];

console.log(personajes.filter(function(personaje){
    return personaje.nivel >= 5;
}));