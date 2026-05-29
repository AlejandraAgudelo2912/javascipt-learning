const nombre = "alejandra";
const edad = 20;
const meGustaProgramar = true;
const comidaFav = "pizza";
let dinero = 20;
const precio = 22.5;
let cantidad = 10; 
let resultado;
let edadEj2 = 17;
let bateriaSocial = 100;
let nombrePj = "Pepe";
let vida = 100;
let ataque = 20;
let defensa = 30;
let nivel = 3;

console.log(`EJERCICIO 1`);

console.log(`Hola me llamo ${nombre} y tengo ${edad}.`);

if(meGustaProgramar){
    console.log("Además me gusta programar.");
}else{
    console.log("Además NO me gusta programar.");
}

console.log(`Y mi comida favorita es ${comidaFav}.`);
console.log(`Tengo de dinero ${dinero}€`);

dinero=dinero-15;
console.log(`Me compré tres cajas de cigarros y ahora tengo ${dinero}€ \n`);

console.log(`EJERCICIO 2`);

resultado = cantidad*precio;

console.log(`El total es ${resultado}\n`);

console.log(`EJERCICIO 3`);
if (edadEj2>=18) {
    console.log(`Puedes entrar\n`);
}else{
    console.log(`No puedes entrar\n`);
}

console.log(`EJERCICIO 4`);
console.log(`Inicias el día con un ${bateriaSocial}% de bateria Social.`);
bateriaSocial -= 30;
console.log(`Después de salir con amigos tienes un ${bateriaSocial}% de bateria Social.`);
bateriaSocial += 20;
console.log(`Después de escuchar música tienes un ${bateriaSocial}% de bateria Social.`);
bateriaSocial -= 50;
console.log(`Después de trabajar tienes un ${bateriaSocial}% de bateria Social. Es hora de ir a dormir\n`);

console.log(`EJERCICIO 5`);
console.log(`Tu personaje ${nombrePj} tiene ${vida} puntos de vida`);
console.log(`Te encuentras con un ogro de nivel 4 con 120 puntos de vida`);
console.log(`Le atacas y le quitas ${ataque} puntos de vida`);
defensa -= 20;
console.log(`El ogro te ataca y te quedas a ${defensa} puntos de vida`);
console.log(`Le atacas y le quitas ${ataque} puntos de vida`);
defensa -= 10;
vida -= 10
console.log(`El ogro te ataca y te quedas a ${defensa} puntos de armadura y ${vida} puntos de vida`);
console.log(`Le atacas y fallas`);
vida -= 20
console.log(`El ogro te ataca y te quedas a ${vida} puntos de vida`);
console.log(`Le atacas y le quitas ${ataque} puntos de vida, el ogro esta a 60 puntos de vida`);
nivel += 1;
ataque += 10;
console.log(`Subes de nivel a nivel ${nivel} y tu daño de ataque aumenta a ${ataque}`);
vida -= 20;
console.log(`El ogro te ataca y te quedas a ${vida} puntos de vida`);
console.log(`Le atacas y le quitas ${ataque} puntos de vida, le quedan 30`);
console.log(`El ogro intenta salir corriendo pero se tropieza y pierde 10 puntos de vida`);
console.log(`Le atacas y le quitas ${ataque} puntos de vida, el ogro muere`)
