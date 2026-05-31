const colores = [
    "Rojo",
    "Verde",
    "Azul"
];

for (const color of colores) {
    console.log(color);
}

//Ejercicio 2
const monedas = [10, 20, 5, 15];
let total = 0;
for(const moneda of monedas){
    total += moneda;
}
console.log(total);

//Ejercicio 3
const inventario = [
    "Espada",
    "Poción",
    "Escudo"
];
for (const objeto of inventario){
    console.log(`Objeto: ${objeto}`);
}