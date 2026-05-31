//Ejercicio 1
const jugador = {
    nombre: "Pepe",
    estadisticas: {
        vida: 100,
        ataque: 25,
        defensa: 15
    }
};

console.log(`Nombre: ${jugador.nombre}\nVida: ${jugador.estadisticas.vida}\nAtaque: ${jugador.estadisticas.ataque}\nDefensa: ${jugador.estadisticas.defensa}`);

//Ejercicio 2
const videojuego = {
    nombre: "Minecraft",
    desarrollador: {
        nombre: "Mojang",
        pais: "Suecia"
    }
};

console.log(`${videojuego.nombre} fue desarollado por ${videojuego.desarrollador.nombre} en ${videojuego.desarrollador.pais}`);

//Ejercicio 3
const usuario = {
    nombre: "Alejandra",
    configuracion: {
        tema: "oscuro",
        idioma: "es"
    }
};

usuario.configuracion.tema = "claro";
console.log(usuario);

//Ejercicio 4
const alumnos = [
    {
        nombre: "Ana",
        nota: 8
    },
    {
        nombre: "Luis",
        nota: 6
    }
];

alumnos.forEach(function(alumno){
    console.log(`${alumno.nombre} tiene un ${alumno.nota}`);
});

//Ejercicio 5
const personajes = [
    {
        nombre: "Guerrero",
        estadisticas: {
            vida: 120,
            ataque: 30
        }
    },
    {
        nombre: "Mago",
        estadisticas: {
            vida: 80,
            ataque: 50
        }
    }
];

personajes.forEach(function(personaje){
    console.log(`${personaje.nombre} -> Vida: ${personaje.estadisticas.vida}, Ataque: ${personaje.estadisticas.ataque}`)
});

//Ejercicio 3
personajes.forEach(function(personaje){
    if(personaje.estadisticas.ataque >= 40){
        console.log(`${personaje.nombre} -> Vida: ${personaje.estadisticas.vida}, Ataque: ${personaje.estadisticas.ataque}`)
    }
});