function saludar (nombre){
    console.log(`Hola ${nombre}`);
}
console.log(`EJERCICIO 1`);

saludar("pepe");
saludar("alejandra");

console.log(`\nEJERCICIO 2`);
function mostrarEdad(edad){
    if(edad>=18){
        console.log(`Eres mayor de edad.`)
    }else{
        console.log(`Eres menor de edad.`);
    }
}

mostrarEdad(18);
mostrarEdad(14);
mostrarEdad(20);

console.log(`\nEJERCICIO 3`);
function atacar(nombreEnemigo, daño){
    console.log(`Atacas a ${nombreEnemigo} y haces ${daño} de daño`);
}

atacar("Ogro", 20);
atacar("Dragón", 50);
atacar("Profesor de programación", 9999);

console.log(`\nEJERCICIO 4`);
function multiplicar(a, b) {
    return a*b;
}
const resultado = multiplicar(4, 5);
console.log(`El resultado es ${resultado}`);

console.log(`\nEJERCICIO 5`);
function obtenerNombreCompleto(nombre, apellido){
    return `${nombre} ${apellido}`;
}
console.log(obtenerNombreCompleto("Alejandra", "Agudelo"));

console.log(`\nEJERCICIO 6`);
function calcularDaño(ataque, defensa) {
    let daño = ataque - defensa;
    if(daño<0){
        daño = 0;
    }
    return daño;
}
console.log(`Daño: ${calcularDaño(50,20)}\nDaño: ${calcularDaño(10,50)}`)