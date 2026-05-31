//Ejerccio 1
const mascotas = [
    {
        nombre: "Luna",
        especie: "Perro"
    },
    {
        nombre: "Michi",
        especie: "Gato"
    }
];

for (const mascota of mascotas){
    console.log(`${mascota.nombre} es un ${mascota.especie}`);
}

//Ejercicio 2 
const videojuegos = [
    {
        nombre: "Minecraft",
        horas: 500
    },
    {
        nombre: "Terraria",
        horas: 200
    },
    {
        nombre: "Stardew Valley",
        horas: 150
    }
];

for (const videojuego of videojuegos){
    console.log(`${videojuego.nombre} - ${videojuego.horas} horas`);
}

//Ejercicio 3
const enemigos = [
    {
        nombre: "Ogro",
        vida: 100
    },
    {
        nombre: "Dragón",
        vida: 300
    }
];
for (const enemigo of enemigos){
    console.log(`${enemigo.nombre} tiene ${enemigo.vida} de vida`);
}