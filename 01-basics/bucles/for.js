const animales = [
    "Perro",
    "Gato",
    "Conejo",
    "Loro"
];

//Ejericio 1
for (let i = 0;i < animales.length; i++){
    console.log(animales[i]);
}

//Ejercicio 2
const numeros = [5, 10, 15, 20];
let total = 0;

for (let i = 0; i < numeros.length; i++){
    total += numeros[i];
}
console.log(`La suma total es ${total}`);

//Ejercicio 3
const enemigos = [
    "Ogro",
    "Dragón",
    "Esqueleto",
    "Goblin"
];

for (let i = 0; i < enemigos.length; i++){
    console.log(`Te enfrentas a: ${enemigos[i]}`);
}

