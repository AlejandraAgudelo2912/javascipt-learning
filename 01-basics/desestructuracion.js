//Ejercicio 1
const mascota = {
    nombre: "Luna",
    edad: 4,
    especie: "Perro"
};

const {nombre, edad, especie} = mascota;
console.log(nombre);
console.log(edad);
console.log(especie);

//Ejercicio 2
const videojuego = {
    nombreV: "Minecraft",
    horas: 500
};

const {nombreV, horas} = videojuego;
console.log(`${nombreV} - ${horas}`);

//Ejercicio 3
const colores = [
    "Rojo",
    "Verde",
    "Azul"
];

const [primerColor, segundoColor, tercerColor] = colores;
console.log(primerColor);
console.log(segundoColor);
console.log(tercerColor);