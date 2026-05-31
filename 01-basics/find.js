//Ejercicio 1
const numeros = [5, 10, 15, 20];
console.log(numeros.find(function(numero){
    return numero === 15;
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
    }
];

console.log(videojuegos.find(function(videojuego){
    return videojuego.nombre === "Terraria";
}));

//Ejercicio 3
const usuarios = [
    {
        nombre: "Ana",
        activo: true
    },
    {
        nombre: "Luis",
        activo: false
    }
];

console.log(usuarios.find(function(usuario){
    return usuario.nombre === "Luis";
}));