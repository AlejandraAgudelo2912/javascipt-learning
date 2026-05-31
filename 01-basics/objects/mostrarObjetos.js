//Ejerccio 1
const mascota = {
    nombre: "Luna",
    especie: "Perro",
    edad: 4
};
console.log(`Nombre: ${mascota.nombre}\nEspecie: ${mascota.especie}\nEdad: ${mascota.edad}`);

//Ejercicio 2
const personaje = {
    nombre: "Pepe",
    vida: 100,
    ataque: 20
};

console.log(`${personaje.nombre} tiene ${personaje.vida} puntos de vida y ${personaje.ataque} de ataque.`);

//Ejercicio 3
personaje.vida = 80;
console.log(`${personaje.nombre} tiene ahora ${personaje.vida} puntos de vida.`);

//Ejercicio 4
const videojuego = {
    nombre: "Minecraft",
    horasJugadas: 500,
    terminado: true
};

if(videojuego.terminado){
    console.log(`Juego terminado`);
}else{
    console.log(`Juego pendiente`);
}